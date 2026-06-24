# Propuesta de Marketing Digital · Ela Bella

Aplicación web interactiva, ultra moderna y persuasiva para presentar a la dirección de **Ela Bella** una propuesta de campaña de validación internacional con **Influencers de IA** (Higgsfield + ElevenLabs), producción bilingüe **español (Paraguay) + portugués (Brasil)**, distribución en Meta / YouTube / TikTok y gestión estratégica incluida a costo cero.

> Stack: HTML + Tailwind CSS (CDN) + JavaScript modular (vanilla). Sin paso de build. Despliegue directo en GitHub Pages.

---

## ✨ Características

- **Navbar + Footer** con logo de Ela Bella (`assets/glow.png`), scroll suave y menú móvil.
- **Resumen ejecutivo (TL;DR)** interactivo: Qué · Por qué · Para qué en 30 segundos.
- **El cerebro de la campaña (sección estrella)**: la complejidad oculta de la pauta digital, mano de obra a $0, **ejemplo interactivo de segmentación por público/idioma** (4 casos reales PY/BR) y metodología de investigación (Google Trends, TikTok Trends/Creative Center, Biblioteca de Anuncios de Meta, analizadores de anuncios, control de CPA, testeo A/B).
- **Producción bilingüe IA**: contenido ilimitado en **español (Paraguay) + portugués (Brasil)** con Higgsfield + ElevenLabs.
- **Calculadora de presupuesto en tiempo real**: sliders de Meta y YouTube, toggle de TikTok con mínimo técnico de $20/día, totalizador animado y desglose.
- **Exportación a PDF**: botón *Imprimir propuesta personalizada* que genera un PDF con la configuración exacta.
- **Comparativa IA vs. Humano** con conmutador visual.
- **Embudo de conversión** con **mapa de flujo tipo diagrama** (Producción IA → mercados → canales → salidas de negocio → loop de optimización).
- **Simulador Fast Ad Iteration**: slider de días (1–10) con medidor de fatiga publicitaria.
- **Matriz de ganchos creativos**: 6 ángulos con hook de 3s y guion generado al instante.
- **FAQ** en acordeón moderno.
- **CTA "Dar Luz Verde"** con confeti + modal de compromiso.
- Paleta premium **Slate/Zinc + Teal**, glassmorphism, animaciones suaves y modo de impresión optimizado.

---

## 📁 Estructura del proyecto

```
presupuesto-mkt-elabela/
├── index.html              # Marcado completo de todas las secciones
├── css/
│   └── styles.css          # Estilos premium (paleta, sliders, glassmorphism, diagrama de flujo, print)
├── js/
│   ├── app.js              # Navbar, scroll, menú móvil, reveal
│   ├── calculator.js       # Calculadora de presupuesto + exportación PDF
│   ├── comparison.js       # Toggle IA vs. Humano
│   ├── simulator.js        # Fast Ad Iteration + fatiga
│   ├── segmentation.js     # Ejemplo interactivo de segmentación por público
│   ├── hooks.js            # Matriz de ganchos creativos
│   ├── faq.js              # Acordeón de preguntas frecuentes
│   └── confetti.js         # Efecto festivo + modal "Dar Luz Verde"
├── assets/
│   ├── glow.png            # Logo real de Ela Bella (usado en Navbar/Footer/favicon)
│   └── logo-elabela.svg    # Logo placeholder (no referenciado, reemplazado por glow.png)
└── README.md
```

### 🔁 Reemplazar el logo real de Ela Bella

El proyecto ya usa el logo real de la tienda en `assets/glow.png` (integrado como "sello de marca" en un chip claro sobre el fondo oscuro, en Navbar, Footer y favicon). Para cambiarlo por otro archivo:

1. Guarda tu imagen como **`assets/glow.png`** (recomendado: PNG con fondo claro/transparente, ≥ 300×300 px para mantener nitidez).
2. En `index.html`, las referencias ya apuntan a `assets/glow.png` (Navbar, Footer y `<link rel="icon">`). Solo sobrescribe el archivo.
3. El chip del logo usa la clase `.logo-chip` (en `css/styles.css`) con dimensiones controladas (2.75rem) que mantienen la relación de aspecto.

---

## 🚀 Despliegue en GitHub Pages

### 1. Inicializar el repositorio local

```bash
cd presupuesto-mkt-elabela
git init
git add .
git commit -m "feat: propuesta de marketing digital interactiva para Ela Bella"
```

### 2. Conectar con el repositorio remoto

```bash
git branch -M main
git remote add origin https://github.com/Bryan-dev074/presupuesto-mkt-elabela.git
git push -u origin main
```

> Si el remoto ya existe con contenido, usa primero `git pull origin main --allow-unrelated-histories` y luego `git push`.

### 3. Activar GitHub Pages

Como este proyecto es **estático (sin build)**, no necesitas `package.json` ni `gh-pages`. Solo configúralo así:

1. Entra al repositorio en GitHub → pestaña **Settings**.
2. Menú lateral izquierdo → **Pages**.
3. En **Build and deployment** → *Source* selecciona **Deploy from a branch**.
4. En *Branch* elige:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Pulsa **Save**.

En 1–2 minutos tu propuesta estará pública en:

```
https://bryan-dev074.github.io/presupuesto-mkt-elabela/
```

---

## 🧰 (Opcional) Si en el futuro añades un build con React + Vite

Si más adelante migras a un framework con paso de compilación, usa `gh-pages`. Ejemplo con **Vite**:

1. Instala el paquete:
   ```bash
   npm install --save-dev gh-pages
   ```
2. En `vite.config.js` define la `base` con el nombre del repo:
   ```js
   export default defineConfig({
     base: "/presupuesto-mkt-elabela/",
     // ...
   });
   ```
3. Añade estos scripts en `package.json`:
   ```json
   {
     "scripts": {
       "build": "vite build",
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```
4. Despliega con un solo comando:
   ```bash
   npm run deploy
   ```
   Esto crea/publica la rama `gh-pages`.
5. En **Settings → Pages** cambia el *Branch* a **`gh-pages` / `/ (root)`**.

> En la versión actual **no es necesario**: el sitio es 100% estático y se sirve tal cual desde la rama `main`.

---

## 🖨️ Uso de la calculadora

1. Mueve los sliders de Meta y YouTube.
2. Activa/desactiva TikTok (aplica automáticamente el mínimo de $20/día).
3. Observa el total mensual recalcularse en tiempo real.
4. Pulsa **"Imprimir / exportar propuesta (PDF)"** y elige *Guardar como PDF*.

---

## ♿ Accesibilidad y rendimiento

- Navegación por teclado y `aria-*` en controles interactivos.
- Respeta `prefers-reduced-motion`.
- Sin dependencias de build ni Node: carga instantánea en cualquier hosting estático.
- Tailwind por CDN (ideal para prototipos/proposals); para producción alta escala puede compilarse a un CSS local.

---

**Confidencial · Preparado para la dirección de Ela Bella · 2026**
