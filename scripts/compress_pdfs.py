import io
import sys
from pathlib import Path

import pikepdf
from PIL import Image

JPEG_QUALITY = 55
MAX_DIM = 1600  # downsample images wider/taller than this (px)


def compress_pdf(src: Path, dst: Path):
    pdf = pikepdf.open(src)
    changed = 0
    for page in pdf.pages:
        try:
            images = page.get_images()
        except Exception:
            continue
        for name, raw_image in images.items():
            try:
                pdfimage = pikepdf.PdfImage(raw_image)
                if pdfimage.indexed:
                    continue
                pil = pdfimage.as_pil_image()
            except Exception:
                continue

            if pil.mode not in ("RGB", "L"):
                pil = pil.convert("RGB")

            w, h = pil.size
            if max(w, h) > MAX_DIM:
                scale = MAX_DIM / max(w, h)
                pil = pil.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.LANCZOS)

            buf = io.BytesIO()
            pil.save(buf, format="JPEG", quality=JPEG_QUALITY, optimize=True)
            new_bytes = buf.getvalue()

            try:
                raw_image.write(new_bytes, filter=pikepdf.Name("/DCTDecode"))
                if "/SMask" in raw_image:
                    del raw_image["/SMask"]
                raw_image["/Width"] = pil.width
                raw_image["/Height"] = pil.height
                raw_image["/ColorSpace"] = pikepdf.Name("/DeviceGray") if pil.mode == "L" else pikepdf.Name("/DeviceRGB")
                raw_image["/BitsPerComponent"] = 8
                changed += 1
            except Exception as e:
                print(f"  skip image {name}: {e}")

    pdf.save(dst, compress_streams=True, object_stream_mode=pikepdf.ObjectStreamMode.generate)
    pdf.close()
    return changed


def main():
    if len(sys.argv) < 2:
        print("usage: compress_pdfs.py <file1.pdf> [file2.pdf ...]")
        sys.exit(1)

    for arg in sys.argv[1:]:
        src = Path(arg)
        tmp = src.with_suffix(".compressed.pdf")
        before = src.stat().st_size
        n = compress_pdf(src, tmp)
        after = tmp.stat().st_size
        if after < before:
            tmp.replace(src)
            print(f"{src.name}: {before/1e6:.1f}MB -> {after/1e6:.1f}MB ({n} images recompressed)")
        else:
            tmp.unlink(missing_ok=True)
            print(f"{src.name}: no improvement, kept original ({before/1e6:.1f}MB)")


if __name__ == "__main__":
    main()
