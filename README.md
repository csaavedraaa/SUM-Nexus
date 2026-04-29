# SUMIMSA Web — Guía de Publicación

## Estructura del proyecto

```
sumimsa-web/
├── public/                          ← Archivos estáticos (imágenes, PDFs, logos)
│   ├── logo-sumimsa_completo.png
│   ├── sumimsa_logo.jpg
│   ├── hero-oil.jpg
│   ├── Contenedor_Tullbox.jpg
│   ├── sumimsa-aviso-privacidad.pdf
│   └── sumimsa-gdpr-rgpd.pdf
├── src/
│   ├── components/                  ← Componentes reutilizables
│   │   ├── Header.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   ├── Cursor.jsx
│   │   ├── Stars.jsx
│   │   ├── Ticker.jsx
│   │   ├── Proveedores.jsx / .css
│   │   └── BackToTop.jsx
│   ├── sections/                    ← Una sección por archivo
│   │   ├── Hero.jsx / .css
│   │   ├── Sectores.jsx / .css
│   │   ├── Esquemas.jsx
│   │   ├── Nosotros.jsx
│   │   ├── Tullbox.jsx
│   │   ├── Proyectos.jsx
│   │   ├── SSPA.jsx
│   │   ├── Noticias.jsx
│   │   ├── Catalogos.jsx
│   │   ├── Bolsa.jsx
│   │   ├── Privacidad.jsx
│   │   └── Contacto.jsx
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── vercel.json
├── package.json
└── .gitignore
```

---

## PASO 1 — Instalar dependencias localmente

```bash
# Entrar a la carpeta del proyecto
cd sumimsa-web

# Instalar Node.js si no lo tienes (https://nodejs.org) — versión 18+ recomendada

# Instalar dependencias
npm install

# Correr en desarrollo
npm run dev
# → Abre http://localhost:3000
```

---

## PASO 2 — Crear repositorio en GitHub

### Opción A — Con GitHub Desktop (más fácil)
1. Descarga **GitHub Desktop** → https://desktop.github.com
2. Abre GitHub Desktop → **File → Add Local Repository**
3. Selecciona la carpeta `sumimsa-web`
4. Clic en **"Publish repository"**
5. Elige nombre: `sumimsa-web` y visibilidad (Public o Private)
6. ✅ Listo — tu código está en GitHub

### Opción B — Con terminal
```bash
cd sumimsa-web

# Iniciar git
git init
git add .
git commit -m "Initial commit — SUMIMSA landing page"

# En GitHub.com → New repository → nombre: sumimsa-web → Create
# Luego copiar el URL y ejecutar:
git remote add origin https://github.com/TU-USUARIO/sumimsa-web.git
git branch -M main
git push -u origin main
```

---

## PASO 3 — Publicar en Vercel (gratis, dominio automático)

1. Ve a **https://vercel.com** e inicia sesión con tu cuenta de GitHub
2. Clic en **"New Project"**
3. Selecciona el repositorio `sumimsa-web`
4. Vercel detecta Vite automáticamente. Configuración:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clic en **"Deploy"**
6. En ~2 minutos tendrás tu URL: `https://sumimsa-web.vercel.app`

---

## PASO 4 — Dominio personalizado (sumimsa.com.mx)

En Vercel → tu proyecto → **Settings → Domains**:
1. Agregar `sumimsa.com.mx`
2. Vercel te dará registros DNS (CNAME o A)
3. En tu proveedor de dominio (GoDaddy, Namecheap, etc.) agrega esos registros
4. En ~24h el dominio apunta a Vercel con HTTPS automático ✅

---

## PASO 5 — Flujo de trabajo con cambios

```bash
# Hacer cambios en el código...

# Ver cambios en vivo
npm run dev

# Cuando estés listo para publicar:
git add .
git commit -m "Descripción del cambio"
git push

# Vercel despliega automáticamente cada push a main ✅
```

---

## Notas importantes

- **Los links a Unsplash** (imágenes externas) funcionan sin conexión a internet local solo si tienes internet. En producción siempre funcionan.
- **Las imágenes locales** (logo, hero-oil.jpg, Tullbox) están en `/public` — Vite las sirve directamente.
- **Los PDFs** también están en `/public` y se descargan correctamente.
- **Vercel.json** maneja el enrutamiento SPA para que las URLs funcionen correctamente.

---

## Próximos pasos sugeridos

1. ✅ Subir a GitHub y Vercel (este paso)
2. 🔲 Convertir secciones stub en componentes React completos
3. 🔲 Agregar Google Analytics / Pixel de Facebook
4. 🔲 Integrar formulario de contacto con Formspree o EmailJS (sin backend)
5. 🔲 Agregar CMS headless (Contentful o Sanity) para editar noticias
6. 🔲 SEO: sitemap.xml, robots.txt, meta tags por sección
7. 🔲 Optimizar imágenes con vite-plugin-imagemin

---

## Contacto técnico

ventas@sumimsa.com.mx | www.sumimsa.com.mx
