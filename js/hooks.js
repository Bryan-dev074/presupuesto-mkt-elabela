/* =====================================================================
   hooks.js · Matriz de ganchos creativos ( Ángulos → guion + hook 3s )
   ===================================================================== */
(function () {
  "use strict";

  const ANGLES = [
    {
      id: "dolor",
      icon: "😣",
      label: "Dolor del cliente",
      hook: '“Pare de tirar dinero en productos que no te dan resultado…”',
      script:
        'Identificamos el problema frustrante que sufre el cliente y abrimos mostrando ese dolor de forma reconocible. Luego presentamos el producto de Ela Bela como la solución directa, con prueba visual y CTA de compra o mensaje privado. Cierre con la promesa de resultado en primera persona.',
    },
    {
      id: "demo",
      icon: "✨",
      label: "Demostración directa",
      hook: '“Mira esto antes de comprar…”',
      script:
        'Vamos directo al grano: mostramos el producto en acción en los primeros 3 segundos, sin intros largas. Enfatizamos el detalle, la textura y el resultado real. Doblaje en portugués neutro y natural, con subtítulos grandes. CTA claro: “Comenta COMPRAR y te envío el link”.',
    },
    {
      id: "unboxing",
      icon: "📦",
      label: "Unboxing emocional",
      hook: '“Esto llegó hoy y no puedo creerlo…”',
      script:
        'Abrimos con la emoción del unboxing: manos, packaging, primer contacto con el producto. Generamos curiosidad y deseo. La voz del influencer de IA transmite asombro genuino en portugués brasileño. Cerramos con escasez (“últimas unidades”) y link en bio.',
    },
    {
      id: "social",
      icon: "🔥",
      label: "Prueba social",
      hook: '“Por qué todos están hablando de esto…”',
      script:
        'Construimos autoridad mostrando que muchas personas ya eligieron el producto: capturas de reseñas, comentarios, antes/después. El gancho activa el sesgo de pertenencia. El influencer de IA lo presenta con energía y credibilidad. CTA: “Únete a los que ya lo probaron”.',
    },
    {
      id: "transformation",
      icon: "🚀",
      label: "Transformación",
      hook: '“De esto… a esto, en una semana…”',
      script:
        'Mostramos un antes y después claro y aspiracional. El producto es el puente entre el estado actual y el deseado. Narramos la transformación con voz persuasiva en portugués. Cierre con garantía/riesgo cero y CTA de compra directa o WhatsApp.',
    },
    {
      id: "curiosidad",
      icon: "🤫",
      label: "Curiosidad / truco",
      hook: '“El truco que nadie te cuenta sobre…”',
      script:
        'Abrimos con un misterio o dato contraintuitivo que detiene el scroll. Mantenemos la tensión 3-5 segundos antes de revelar que la respuesta es el producto de Ela Bela. Voz en off intrigante. CTA que invita a descubrir más escribiendo por DM.',
    },
  ];

  const tabsWrap = document.getElementById("hookTabs");
  const content = document.getElementById("hookContent");
  let active = ANGLES[0].id;

  function renderTabs() {
    tabsWrap.innerHTML = ANGLES.map(
      (a) =>
        `<button class="hook-tab ${a.id === active ? "is-active" : ""}" data-id="${a.id}">${a.icon} ${a.label}</button>`
    ).join("");
    tabsWrap.querySelectorAll(".hook-tab").forEach((btn) =>
      btn.addEventListener("click", () => {
        active = btn.dataset.id;
        renderTabs();
        renderContent();
      })
    );
  }

  function renderContent() {
    const a = ANGLES.find((x) => x.id === active);
    content.innerHTML = `
      <div class="hook-block">
        <h4>⚡ Gancho de 3 segundos</h4>
        <p class="hook-script">${a.hook}</p>
        <p class="mt-3 text-xs text-slate-500">Generado para detener el scroll y retener la atención en la ventana crítica.</p>
      </div>
      <div class="hook-block">
        <h4>🎬 Guion rápido (Higgsfield + ElevenLabs)</h4>
        <p class="hook-script">${a.script}</p>
        <p class="mt-3 text-xs text-slate-500">Producción lista en un solo día · doblaje perfecto al portugués brasileño.</p>
      </div>`;
  }

  renderTabs();
  renderContent();
})();
