import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname, basename } from 'path'

const PUBLIC_DIR = new URL('../public', import.meta.url).pathname.slice(1).replace(/%20/g, ' ')
const QUALITY = 82
const EXTS = new Set(['.png', '.jpg', '.jpeg'])

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) files.push(...await walk(full))
    else if (EXTS.has(extname(e.name).toLowerCase())) files.push(full)
  }
  return files
}

async function convert(file) {
  const out = file.replace(/\.(png|jpg|jpeg)$/i, '.webp')
  const before = (await stat(file)).size
  await sharp(file).webp({ quality: QUALITY }).toFile(out)
  const after = (await stat(out)).size
  const saved = Math.round((1 - after / before) * 100)
  console.log(`✓ ${basename(file)} → ${basename(out)}  ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB  (${saved}% menos)`)
}

const files = await walk(PUBLIC_DIR)
console.log(`\nConvirtiendo ${files.length} imágenes...\n`)
await Promise.all(files.map(convert))
console.log('\n¡Listo! Ahora actualiza las referencias en el código.')
