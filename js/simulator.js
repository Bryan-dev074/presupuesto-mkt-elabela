/* =====================================================================
   simulator.js · Fast Ad Iteration (slider 1–10 dias + fadiga)
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

  /* Devolve {pct 0-100, color, nivel, texto} conforme os dias */
  function fatigueFor(days) {
    if (days <= 5) {
      return {
        pct: (days / 10) * 100,
        bar: "linear-gradient(90deg,#14b8a6,#2dd4bf)",
        color: "#2dd4bf",
        nivel: days <= 3 ? "Ótimo" : "Saudável",
        verdict: `Manter o anúncio <strong class="text-white">${days} dia${days > 1 ? "s" : ""}</strong> está na faixa ideal: você aproveita o pico de desempenho sem que o público o memorize.`,
      };
    }
    if (days <= 7) {
      return {
        pct: (days / 10) * 100,
        bar: "linear-gradient(90deg,#f59e0b,#fbbf24)",
        color: "#fbbf24",
        nivel: "Alerta",
        verdict: `Aos <strong class="text-white">${days} dias</strong> o anúncio começa a se desgastar: o custo por clique sobe. Convém trocar logo.`,
      };
    }
    return {
      pct: (days / 10) * 100,
      bar: "linear-gradient(90deg,#e11d48,#fb7185)",
      color: "#fb7185",
      nivel: "Desperdício",
      verdict: `Mais de <strong class="text-white">${days} dias</strong> é desperdício: o público já memorizou o anúncio e o desempenho cai. Aqui se queima orçamento.`,
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
