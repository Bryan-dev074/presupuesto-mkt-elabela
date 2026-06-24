/* =====================================================================
   simulator.js · Fast Ad Iteration (slider 1–10 días + fatiga)
   ===================================================================== */
(function () {
  "use strict";

  const slider = document.getElementById("daysSlider");
  const valueEl = document.getElementById("daysValue");
  const bar = document.getElementById("fatigueBar");
  const label = document.getElementById("fatigueLabel");
  const verdict = document.getElementById("daysVerdict");

  function paintTrack() {
    const min = +slider.min, max = +slider.max, val = +slider.value;
    const pct = ((val - min) / (max - min)) * 100;
    slider.style.backgroundSize = pct + "% 100%";
  }

  /* Devuelve {pct 0-100, color, nivel, texto} según días */
  function fatigueFor(days) {
    if (days <= 5) {
      return {
        pct: (days / 10) * 100,
        bar: "linear-gradient(90deg,#14b8a6,#2dd4bf)",
        color: "#2dd4bf",
        nivel: days <= 3 ? "Óptimo" : "Saludable",
        verdict: `Mantener el anuncio <strong class="text-white">${days} día${days > 1 ? "s" : ""}</strong> está en el rango ideal: aprovechas el pico de rendimiento sin que el público lo memorice.`,
      };
    }
    if (days <= 7) {
      return {
        pct: (days / 10) * 100,
        bar: "linear-gradient(90deg,#f59e0b,#fbbf24)",
        color: "#fbbf24",
        nivel: "Alerta",
        verdict: `A los <strong class="text-white">${days} días</strong> el anuncio empieza a fatigarse: el costo por clic sube. Conviene rotar pronto.`,
      };
    }
    return {
      pct: (days / 10) * 100,
      bar: "linear-gradient(90deg,#e11d48,#fb7185)",
      color: "#fb7185",
      nivel: "Desperdicio",
      verdict: `Más de <strong class="text-white">${days} días</strong> es desperdicio: el público ya memorizó el anuncio y el rendimiento cae. Aquí se quema presupuesto.`,
    };
  }

  function update() {
    const days = +slider.value;
    valueEl.textContent = String(days);
    paintTrack();
    const f = fatigueFor(days);
    bar.style.width = f.pct + "%";
    bar.style.background = f.bar;
    label.textContent = f.nivel;
    label.style.color = f.color;
    verdict.innerHTML = f.verdict;
  }

  slider?.addEventListener("input", update);
  update();
})();
