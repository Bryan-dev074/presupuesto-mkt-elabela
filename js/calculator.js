/* =====================================================================
   calculator.js · Presupuesto interactivo en tiempo real
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- Configuración de costos (FUENTE ÚNICA DE VERDAD) ---------- */
  const COSTS = {
    higgsfield: { label: "Higgsfield (Plan Ultra)", monthly: 129, color: "#2dd4bf", fixed: true },
    elevenlabs: { label: "ElevenLabs (Plan Starter)", monthly: 6, color: "#5eead4", fixed: true },
    meta: { label: "Meta Ads (Reels)", color: "#2dd4bf", perDay: 0 },
    youtube: { label: "YouTube Shorts", color: "#fb7185", perDay: 0 },
    tiktok: { label: "TikTok Ads", color: "#e879f9", perDay: 20, monthlyMin: 600 },
  };
  const DAYS_PER_MONTH = 30;

  /* ---------- Estado ---------- */
  const state = {
    metaPerDay: 5,
    ytPerDay: 3,
    tiktokOn: false,
  };

  /* ---------- Referencias DOM ---------- */
  const metaSlider = document.getElementById("metaSlider");
  const ytSlider = document.getElementById("ytSlider");
  const metaValue = document.getElementById("metaValue");
  const ytValue = document.getElementById("ytValue");
  const tiktokToggle = document.getElementById("tiktokToggle");
  const tiktokAlert = document.getElementById("tiktokAlert");
  const tiktokActiveInfo = document.getElementById("tiktokActiveInfo");
  const tiktokStatus = document.getElementById("tiktokStatus");
  const totalDisplay = document.getElementById("totalDisplay");
  const breakdown = document.getElementById("breakdown");
  const printBtn = document.getElementById("printBtn");

  /* ---------- Helpers ---------- */
  const money = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  const money2 = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  /* Pinta el track rellenado del slider según su progreso */
  function paintTrack(slider) {
    const min = +slider.min, max = +slider.max, val = +slider.value;
    const pct = ((val - min) / (max - min)) * 100;
    slider.style.backgroundSize = pct + "% 100%";
  }

  /* ---------- Render del total + desglose ---------- */
  function render() {
    const metaMonthly = state.metaPerDay * DAYS_PER_MONTH;
    const ytMonthly = state.ytPerDay * DAYS_PER_MONTH;
    const tiktokMonthly = state.tiktokOn ? COSTS.tiktok.monthlyMin : 0;

    const total =
      COSTS.higgsfield.monthly +
      COSTS.elevenlabs.monthly +
      metaMonthly +
      ytMonthly +
      tiktokMonthly;

    // Total con animación de conteo suave
    animateNumber(totalDisplay, total, "$");

    // Desglose
    const rows = [
      { ...COSTS.higgsfield, value: COSTS.higgsfield.monthly },
      { ...COSTS.elevenlabs, value: COSTS.elevenlabs.monthly },
      { ...COSTS.meta, value: metaMonthly, detail: `${money(state.metaPerDay)}/día × 30` },
      { ...COSTS.youtube, value: ytMonthly, detail: `${money(state.ytPerDay)}/día × 30` },
    ];
    if (state.tiktokOn) {
      rows.push({ ...COSTS.tiktok, value: tiktokMonthly, detail: `${money(COSTS.tiktok.perDay)}/día · mínimo técnico` });
    }

    breakdown.innerHTML = rows
      .map(
        (r) => `
        <li>
          <span><span class="dot" style="background:${r.color}"></span>${r.label}${r.detail ? ` <span class="text-xs text-slate-500">· ${r.detail}</span>` : ""}</span>
          <span class="font-display font-semibold text-slate-100 tabular-nums">${money(r.value)}</span>
        </li>`
      )
      .join("");
  }

  /* ---------- Animación de conteo del total ---------- */
  function animateNumber(el, target, prefix = "") {
    const current = parseFloat((el.dataset.val || "0"));
    const duration = 450;
    const start = performance.now();
    cancelAnimationFrame(el._raf || 0);
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = current + (target - current) * eased;
      el.textContent = prefix + Math.round(val).toLocaleString("en-US");
      if (p < 1) el._raf = requestAnimationFrame(tick);
      else el.dataset.val = String(target);
    }
    el._raf = requestAnimationFrame(tick);
  }

  /* ---------- Sliders ---------- */
  function bindSlider(slider, valueEl, key, isYt) {
    paintTrack(slider);
    valueEl.textContent = money(+slider.value);
    slider.addEventListener("input", () => {
      const v = +slider.value;
      if (isYt) state.ytPerDay = v;
      else state.metaPerDay = v;
      valueEl.textContent = money(v);
      paintTrack(slider);
      render();
    });
  }
  bindSlider(metaSlider, metaValue, "meta", false);
  bindSlider(ytSlider, ytValue, "yt", true);

  /* ---------- Toggle TikTok ---------- */
  tiktokToggle?.addEventListener("click", () => {
    state.tiktokOn = !state.tiktokOn;
    tiktokToggle.setAttribute("aria-checked", String(state.tiktokOn));
    if (state.tiktokOn) {
      tiktokAlert.classList.add("hidden");
      tiktokActiveInfo.classList.remove("hidden");
      tiktokActiveInfo.classList.add("flex");
      tiktokStatus.textContent = "Activo · mínimo técnico de $20 USD/día aplicado (~$600/mes).";
    } else {
      tiktokAlert.classList.remove("hidden");
      tiktokActiveInfo.classList.add("hidden");
      tiktokActiveInfo.classList.remove("flex");
      tiktokStatus.textContent = "Pausado temporalmente para optimizar presupuesto en Fase 1.";
    }
    render();
  });

  /* ---------- Imprimir / Exportar PDF ---------- */
  printBtn?.addEventListener("click", () => {
    // Inyecta un resumen imprimible en la cabecera de la calculadora (visible solo al imprimir)
    injectPrintSummary();
    window.print();
  });

  function injectPrintSummary() {
    const metaMonthly = state.metaPerDay * DAYS_PER_MONTH;
    const ytMonthly = state.ytPerDay * DAYS_PER_MONTH;
    const tiktokMonthly = state.tiktokOn ? COSTS.tiktok.monthlyMin : 0;
    const total = COSTS.higgsfield.monthly + COSTS.elevenlabs.monthly + metaMonthly + ytMonthly + tiktokMonthly;

    let box = document.getElementById("printSummary");
    if (!box) {
      box = document.createElement("div");
      box.id = "printSummary";
      box.style.cssText = "display:none;";
      document.getElementById("calculadora").prepend(box);
    }
    box.innerHTML = `
      <div style="display:block !important; padding:24px; margin-bottom:16px; border:2px solid #0d9488; border-radius:12px; background:#f0fdfa;">
        <h2 style="margin:0 0 8px; color:#0f172a; font-size:20px;">Propuesta de presupuesto personalizada — Ela Bella</h2>
        <p style="margin:0 0 12px; color:#475569; font-size:13px;">Generada el ${new Date().toLocaleDateString("es-ES", { dateStyle: "long" })}</p>
        <table style="width:100%; border-collapse:collapse; font-size:13px; color:#1e293b;">
          <tr><td style="padding:6px 0; border-bottom:1px solid #cbd5e1;">Higgsfield (Plan Ultra)</td><td style="text-align:right; border-bottom:1px solid #cbd5e1; font-weight:600;">${money2(COSTS.higgsfield.monthly)}</td></tr>
          <tr><td style="padding:6px 0; border-bottom:1px solid #cbd5e1;">ElevenLabs (Plan Starter)</td><td style="text-align:right; border-bottom:1px solid #cbd5e1; font-weight:600;">${money2(COSTS.elevenlabs.monthly)}</td></tr>
          <tr><td style="padding:6px 0; border-bottom:1px solid #cbd5e1;">Meta Ads (${money(state.metaPerDay)}/día × 30)</td><td style="text-align:right; border-bottom:1px solid #cbd5e1; font-weight:600;">${money(metaMonthly)}</td></tr>
          <tr><td style="padding:6px 0; border-bottom:1px solid #cbd5e1;">YouTube Shorts (${money(state.ytPerDay)}/día × 30)</td><td style="text-align:right; border-bottom:1px solid #cbd5e1; font-weight:600;">${money(ytMonthly)}</td></tr>
          ${state.tiktokOn ? `<tr><td style="padding:6px 0; border-bottom:1px solid #cbd5e1;">TikTok Ads (mínimo técnico $20/día)</td><td style="text-align:right; border-bottom:1px solid #cbd5e1; font-weight:600;">${money(tiktokMonthly)}</td></tr>` : ""}
          <tr><td style="padding:10px 0 0; font-weight:700; font-size:15px; color:#0f172a;">TOTAL MENSUAL</td><td style="text-align:right; padding-top:10px; font-weight:800; font-size:15px; color:#0d9488;">${money(total)}</td></tr>
        </table>
        <p style="margin:12px 0 0; color:#475569; font-size:12px;">Gestión estratégica, edición y control diario del presupuesto: incluidos a $0 USD.</p>
      </div>`;
  }

  /* ---------- Init ---------- */
  render();
})();
