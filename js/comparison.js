/* =====================================================================
   comparison.js · Toggle "Ver costo con IA" vs "Ver costo tradicional"
   ===================================================================== */
(function () {
  "use strict";

  const cmpIa = document.getElementById("cmpIa");
  const cmpHumano = document.getElementById("cmpHumano");
  const cards = document.querySelectorAll(".cmp-card");

  function setActive(view) {
    // view: 'ia' | 'humano'
    if (view === "ia") {
      cmpIa?.classList.add("cmp-active");
      cmpHumano?.classList.remove("cmp-active");
    } else {
      cmpHumano?.classList.add("cmp-active");
      cmpIa?.classList.remove("cmp-active");
    }
    // Resalta la tarjeta correspondiente y atenúa la otra
    cards.forEach((card) => {
      const side = card.dataset.side;
      if (side === view) {
        card.classList.remove("is-dimmed");
        card.style.transform = "scale(1.02)";
        card.style.boxShadow = "0 20px 50px -20px rgba(45,212,191,0.35)";
      } else {
        card.classList.add("is-dimmed");
        card.style.transform = "";
        card.style.boxShadow = "";
      }
    });
  }

  cmpIa?.addEventListener("click", () => setActive("ia"));
  cmpHumano?.addEventListener("click", () => setActive("humano"));

  // Estado inicial: IA destacado
  setActive("ia");
})();
