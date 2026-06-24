/* =====================================================================
   spotlight.js · Efecto spotlight que sigue el cursor en tarjetas
   Ilumina cada tool-card con un glow radial basado en la posición del mouse
   ===================================================================== */
(function () {
  "use strict";

  const cards = document.querySelectorAll(".tool-card");
  if (!cards.length) return;

  // Soporte táctil / sin hover: degradado progresivo, no hace falta JS
  const canHover = window.matchMedia("(hover: hover)").matches;
  if (!canHover) return;

  cards.forEach((card) => {
    const accent = card.style.getPropertyValue("--tc") || "#2dd4bf";

    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.background = `
        radial-gradient(420px circle at ${x}% ${y}%,
          color-mix(in srgb, ${accent} 12%, rgba(22,30,46,0.85)),
          rgba(15,22,35,0.6) 60%)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.background = "";
    });
  });
})();
