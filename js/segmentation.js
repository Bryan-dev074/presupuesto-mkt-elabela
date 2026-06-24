/* =====================================================================
   segmentation.js · Ejemplo interactivo de segmentación por público
   Muestra cómo cambia la estrategia según producto / mercado / idioma
   ===================================================================== */
(function () {
  "use strict";

  const EXAMPLES = [
    {
      id: "py-basico",
      label: "PY · Producto básico",
      persona: "Mujer 22–35 · Paraguay",
      interests: ["Skincare diario", "Hidratación", "Maquillaje natural", "Cuidado personal económico"],
      behaviors: ["Compra en marketplace", "Interactúa con reels de belleza", "Busca reseñas en español"],
      angle: "Dolor + precio accesible",
      hook: "“Si tu crema hidratante te deja la piel tirante… probá esto.”",
      lang: "Español (paraguayo neutro)",
      note: "Ej: una crema facial de uso diario. El ángulo va al problema (piel seca) y posiciona el producto como solución económica. Doblaje en español con tono cercano.",
      color: "#2dd4bf",
    },
    {
      id: "br-estrella",
      label: "BR · Producto estrella",
      persona: "Mulher 18–30 · Brasil",
      interests: ["Maquiagem completa", "Tendências de beleza", "Influenciadores de beleza", "Unhas e cabelo"],
      behaviors: ["Compra por impulso", "Segue creators de beleza", "Assiste tutoriais longos"],
      angle: "Transformación aspiracional",
      hook: "“Do básico ao arrasão em 60 segundos…”",
      lang: "Português (BR natural)",
      note: "Ej: un iluminador o labial tendencia. Ángulo de transformación 'antes y después', voz en portugués brasileño con energía. Público que compra por impulso y sigue creators.",
      color: "#e879f9",
    },
    {
      id: "py-regalo",
      label: "PY · Producto de regalo",
      persona: "Mujer 25–45 que regala",
      interests: ["Regalos", "Fechas especiales", "Autocuidado", "Belleza para regalar"],
      behaviors: ["Compra en fechas clave (Día de la Madre, San Valentín)", "Busca kits/armados", "Valora la presentación"],
      angle: "Emoción + presentación",
      hook: "“El regalo que la va a dejar sin palabras…”",
      lang: "Español (paraguayo)",
      note: "Kit o producto con packaging atractivo. El gancho juega con la emoción de regalar. Segmentación temporal según el calendario de fechas comerciales de Paraguay.",
      color: "#fbbf24",
    },
    {
      id: "br-pro",
      label: "BR · Línea profesional",
      persona: "Profissional de beleza · Brasil",
      interests: ["Produtos profissionais", "Salão de beleza", "Cursos de maquiagem", "Atacado cosméticos"],
      behaviors: ["Compra em volume", "Participa de comunidades B2B", "Pesquisa fornecedores"],
      angle: "Calidad profesional + rentabilidad",
      hook: "“O que as profissionais usam para fidelizar clientes…”",
      lang: "Português (BR técnico)",
      note: "Línea para maquilladoras/profesionales. Ángulo B2B: rentabilidad y fidelización de clientas. Lenguaje técnico, doblaje en portugués formal. Audiencia de menor volumen pero mayor ticket.",
      color: "#60a5fa",
    },
  ];

  const tabsWrap = document.getElementById("segTabs");
  const content = document.getElementById("segContent");
  if (!tabsWrap || !content) return;

  let active = EXAMPLES[0].id;

  function renderTabs() {
    tabsWrap.innerHTML = EXAMPLES.map(
      (e) => `<button class="seg-tab ${e.id === active ? "is-active" : ""}" data-id="${e.id}" style="--seg-color:${e.color}">${e.label}</button>`
    ).join("");
    tabsWrap.querySelectorAll(".seg-tab").forEach((btn) =>
      btn.addEventListener("click", () => {
        active = btn.dataset.id;
        renderTabs();
        renderContent();
      })
    );
  }

  function chip(text) {
    return `<span class="seg-chip">${text}</span>`;
  }

  function renderContent() {
    const e = EXAMPLES.find((x) => x.id === active);
    content.innerHTML = `
      <!-- Columna izquierda: definición de audiencia -->
      <div class="seg-block" style="--seg-color:${e.color}">
        <div class="seg-block-head" style="color:${e.color}">
          <span class="seg-block-icon">👥</span>
          Audiencia objetivo
        </div>
        <div class="seg-persona">${e.persona}</div>
        <div class="mt-4 text-[11px] uppercase tracking-widest text-slate-500">Intereses</div>
        <div class="mt-2 flex flex-wrap gap-2">${e.interests.map(chip).join("")}</div>
        <div class="mt-4 text-[11px] uppercase tracking-widest text-slate-500">Comportamientos</div>
        <div class="mt-2 flex flex-wrap gap-2">${e.behaviors.map(chip).join("")}</div>
        <div class="mt-4 text-[11px] uppercase tracking-widest text-slate-500">Idioma de producción</div>
        <div class="mt-2">${chip(e.lang)}</div>
      </div>

      <!-- Columna derecha: estrategia de contenido -->
      <div class="seg-block">
        <div class="seg-block-head" style="color:${e.color}">
          <span class="seg-block-icon">🎬</span>
          Estrategia creativa resultante
        </div>
        <div class="mt-3">
          <div class="text-[11px] uppercase tracking-widest text-slate-500">Ángulo recomendado</div>
          <div class="mt-1 font-display text-lg font-semibold text-slate-100">${e.angle}</div>
        </div>
        <div class="mt-4">
          <div class="text-[11px] uppercase tracking-widest text-slate-500">Gancho de 3 segundos</div>
          <div class="mt-1 seg-hook">${e.hook}</div>
        </div>
        <div class="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-xs text-slate-400 leading-relaxed">
          <strong class="text-slate-200">Por qué:</strong> ${e.note}
        </div>
      </div>`;
  }

  renderTabs();
  renderContent();
})();
