# Propuesta de Marketing Digital · Ela Bella

Aplicación web interactiva, ultra moderna y persuasiva para presentar a la dirección de **Ela Bella** una propuesta de campaña de validación internacional con **Influencers de IA** (Higgsfield + ElevenLabs), producción bilingüe **español (Paraguay) + portugués (Brasil)**, distribución en Meta / YouTube / TikTok y gestión estratégica incluida a costo cero.

> Stack: HTML + **Tailwind CSS (compilado a un CSS estático)** + JavaScript modular (vanilla). Sitio 100% estático, sin dependencias externas en tiempo de ejecución. Despliegue automático en GitHub Pages mediante GitHub Actions.

---

## ✨ Características

- **Navbar + Footer** con logo de Ela Bella (`assets/glow.png`), scroll suave, menú móvil y **resaltado del enlace activo** (scrollspy).
- **Barra de progreso de scroll** y **botón "volver arriba"** flotante.
- **Resumen ejecutivo (TL;DR)** interactivo: Qué · Por qué · Para qué en 30 segundos.
- **El cerebro de la campaña (sección estrella)**: la complejidad oculta de la pauta digital, mano de obra a $0, **ejemplo interactivo de segmentación por público/idioma** (4 casos reales PY/BR) y metodología de investigación (Google Trends, TikTok Creative Center, Biblioteca de Anuncios de Meta, analizadores de anuncios, control de CPA, testeo A/B).
- **Calculadora de presupuesto en tiempo real**: sliders de Meta y YouTube, toggle de TikTok con mínimo técnico de $20/día, totalizador animado y desglose.
- **Exportación a PDF**: botón *Imprimir propuesta personalizada* que genera un PDF con la configuración exacta.
- **Comparativa IA vs. Humano** con conmutador visual.
- **Embudo de conversión** con **mapa de flujo tipo diagrama** (Producción IA → mercados → canales → salidas de negocio → loop de optimización).
- **Simulador Fast Ad Iteration**: slider de días (1–10) con medidor de fatiga publicitaria.
- **Matriz de ganchos creativos**: 6 ángulos con hook de 3s y guion generado al instante.
- **FAQ** en acordeón moderno.
- **CTA "Dar Luz Verde"** con confeti + modal de compromiso.
- Paleta premium **Slate/Zinc + Teal**, glassmorphism, animaciones suaves (contadores animados, parallax sutil, reveal con desenfoque), accesibilidad y modo de impresión optimizado.

---

## 📁 Estructura del proyecto

```
presupuesto-mkt-elabela/
├── index.html              # Marcado completo de todas las secciones
├── tailwind.config.js      # Configuración de Tailwind (tema, colores, animaciones)
├── .nojekyll               # Evita el procesamiento Jekyll en GitHub Pages
├── css/
│   ├── tailwind.input.css  # Entrada de Tailwind (@tailwind base/components/utilities)
│   ├── tailwind.css         # ⚙️ CSS de Tailwind COMPILADO (generado — no editar a mano)
│   └── styles.css          # Estilos premium propios (paleta, sliders, glassmorphism, diagrama, print)
├── js/
│   ├── app.js              # Navbar, scroll, menú móvil, reveal, modal (Escape)
│   ├── enhance.js          # Progreso de scroll, scrollspy, volver arriba, contadores, parallax
│   ├── calculator.js       # Calculadora de presupuesto + exportación PDF
│   ├── comparison.js       # Toggle IA vs. Humano
│   ├── simulator.js        # Fast Ad Iteration + fatiga
│   ├── segmentation.js     # Ejemplo interactivo de segmentación por público
│   ├── hooks.js            # Matriz de ganchos creativos
│   ├── faq.js              # Acordeón de preguntas frecuentes
│   ├── confetti.js         # Efecto festivo + modal "Dar Luz Verde"
│   └── spotlight.js        # Glow que sigue el cursor en las tarjetas de herramientas
├── assets/
│   ├── glow.png            # Logo real de Ela Bella (usado en Navbar/Footer/favicon)
│   └── logo-elabela.svg    # Logo placeholder (no referenciado, reemplazado por glow.png)
├── .github/workflows/
│   └── deploy.yml          # Despliegue automático a GitHub Pages
└── README.md
```

### 🔁 Reemplazar el logo real de Ela Bella

El proyecto ya usa el logo real de la tienda en `assets/glow.png` (integrado como "sello de marca" en un chip claro sobre el fondo oscuro, en Navbar, Footer y favicon). Para cambiarlo por otro archivo:

1. Guarda tu imagen como **`assets/glow.png`** (recomendado: PNG con fondo claro/transparente, ≥ 300×300 px para mantener nitidez).
2. En `index.html`, las referencias ya apuntan a `assets/glow.png` (Navbar, Footer y `<link rel="icon">`). Solo sobrescribe el archivo.
3. El chip del logo usa la clase `.logo-chip` (en `css/styles.css`).

---

## 🎨 Reconstruir los estilos de Tailwind

Los estilos de Tailwind están **precompilados** en `css/tailwind.css` (por eso el sitio carga al instante y no depende de ningún CDN externo). Solo necesitas recompilar si **agregas o cambias clases de Tailwind** en el HTML o en los archivos JS:

```bash
npx tailwindcss@3 -i css/tailwind.input.css -o css/tailwind.css --minify
```

> El escaneo de clases se configura en `tailwind.config.js` (`content: ["./index.html", "./js/**/*.js"]`). No edites `css/tailwind.css` a mano: se sobrescribe en cada compilación.

---

## 🚀 Despliegue en GitHub Pages (automático)

El repositorio incluye un workflow (`.github/workflows/deploy.yml`) que **publica el sitio automáticamente en cada `push` a `main`**. Solo hay que decirle a GitHub que use GitHub Actions como origen:

1. Entra al repositorio en GitHub → pestaña **Settings**.
2. Menú lateral izquierdo → **Pages**.
3. En **Build and deployment** → *Source* selecciona **GitHub Actions** (⚠️ **no** "Deploy from a branch").
4. Listo. Cada `push` a `main` dispara el despliegue (también puedes lanzarlo manualmente desde la pestaña **Actions → Deploy to GitHub Pages → Run workflow**).

En 1–2 minutos tu propuesta estará pública en:

```
https://bryan-dev074.github.io/presupuesto-mkt-elabela/
```

> **¿El despliegue daba error?** La causa habitual es tener *Source* en "Deploy from a branch" mientras existe el workflow de Actions (incompatibles), o una versión de acción inválida. Con *Source = GitHub Actions* y el workflow actual (corregido a `actions/deploy-pages@v4`) el despliegue funciona.

### Publicar los cambios

```bash
git add .
git commit -m "tu mensaje"
git push origin main
```

---

## 🖨️ Uso de la calculadora

1. Mueve los sliders de Meta y YouTube.
2. Activa/desactiva TikTok (aplica automáticamente el mínimo de $20/día).
3. Observa el total mensual recalcularse en tiempo real.
4. Pulsa **"Imprimir / exportar propuesta (PDF)"** y elige *Guardar como PDF*.

---

## ♿ Accesibilidad y rendimiento

- Navegación por teclado y `aria-*` en controles interactivos.
- Respeta `prefers-reduced-motion` (desactiva animaciones para quien lo prefiere).
- **CSS de Tailwind compilado y minificado** (~24 KB): carga instantánea, sin CDN externo ni FOUC, funciona aunque la red bloquee servicios de terceros.
- Fallback `<noscript>`: el contenido se muestra completo aunque JavaScript esté desactivado.

---

**Confidencial · Preparado para la dirección de Ela Bella · 2026**
