/* =====================================================================
   faq.js · Acorón de preguntas frecuentes
   ===================================================================== */
(function () {
  "use strict";

  const FAQS = [
    {
      q: "¿Se nota que el influencer es IA?",
      a: "Con Higgsfield + ElevenLabs el resultado es visual y vocalmente realista, con doblaje natural al portugués brasileño. El objetivo no es engañar, sino producir contenido de alta calidad a velocidad industrial. Además, las plataformas cada vez normalizan más el contenido generado con IA cuando aporta valor real al espectador.",
    },
    {
      q: "¿Qué pasa si se acaban los caracteres de ElevenLabs?",
      a: "El plan Starter ($6/mes) cubre con holgura la producción de la Fase 1. Si la demanda de videos crece, el plan es escalable por tramos muy bajos. Monitorizo el consumo semanalmente y ajusto antes de que exista riesgo de corte, de modo que la producción nunca se detiene.",
    },
    {
      q: "¿Por qué TikTok Ads está pausado en la Fase 1?",
      a: "TikTok exige un mínimo técnico de $20 USD diarios (~$600/mes). Para optimizar el presupuesto inicial, concentramos la inversión en Meta y YouTube, que ya empujan el crecimiento orgánico de TikTok como canal colateral a costo cero. Cuando los datos lo justifiquen, activamos la pauta pagada en TikTok en la Fase 2.",
    },
    {
      q: "¿Cómo medimos que la campaña funciona?",
      a: "Con dos métricas de negocio, no de vanidad: compras realizadas en la tienda online y mensajes privados (DM/WhatsApp) cualificados. Reportamos el costo de adquisición (CPA) por anuncio y optimizamos en consecuencia. Si un ángulo no convierte, se rota en 3–5 días.",
    },
    {
      q: "¿Cuánto tardamos en ver resultados?",
      a: "La configuración técnica toma unos días. Los primeros anuncios de prueba corren en ciclos de 3–5 días, por lo que las primeras señales de rendimiento (clics, mensajes, ventas) suelen aparecer en las primeras dos semanas, con optimización continua a partir de ahí.",
    },
    {
      q: "¿El presupuesto puede ajustarse en cualquier momento?",
      a: "Sí. Los deslizadores de la calculadora reflejan exactamente cómo trabajamos: el presupuesto diario de Meta y YouTube puede subirse o bajarse sobre la marcha. Nada es rígido — todo se optimiza según el rendimiento real.",
    },
  ];

  const list = document.getElementById("faqList");
  if (!list) return;

  list.innerHTML = FAQS.map(
    (f, i) => `
    <details class="faq-item" ${i === 0 ? "open" : ""}>
      <summary class="faq-q">
        <span>${f.q}</span>
        <span class="faq-icon" aria-hidden="true">
          <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
        </span>
      </summary>
      <div class="faq-a">${f.a}</div>
    </details>`
  ).join("");
})();
