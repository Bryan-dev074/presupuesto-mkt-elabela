/* =====================================================================
   confetti.js · Efecto festivo + modal de compromiso en "Dar Luz Verde"
   ===================================================================== */
(function () {
  "use strict";

  const btn = document.getElementById("greenLightBtn");
  const modal = document.getElementById("commitModal");
  const closeModal = document.getElementById("closeModal");
  if (!btn || !modal) return;

  const COLORS = ["#2dd4bf", "#14b8a6", "#5eead4", "#a78bfa", "#f0abfc", "#fbbf24", "#f8fafc"];

  /* ---------- Confeti ---------- */
  function launchConfetti() {
    const count = 140;
    const originX = window.innerWidth / 2;
    const originY = window.innerHeight * 0.45;

    for (let i = 0; i < count; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = originX + "px";
      piece.style.top = originY + "px";
      piece.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
      piece.style.width = 6 + Math.random() * 8 + "px";
      piece.style.height = 8 + Math.random() * 10 + "px";
      piece.style.opacity = "0.95";
      // Variación de forma
      if (Math.random() > 0.7) piece.style.borderRadius = "50%";
      document.body.appendChild(piece);

      // Trayectoria física simple
      const angle = Math.random() * Math.PI * 2;
      const velocity = 200 + Math.random() * 400;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity - 300; // impulso hacia arriba
      const rotation = (Math.random() - 0.5) * 1080;
      const duration = 1800 + Math.random() * 1400;

      const start = performance.now();
      const gravity = 1400;

      function tick(now) {
        const t = (now - start) / 1000;
        const x = vx * t;
        const y = vy * t + 0.5 * gravity * t * t;
        const op = Math.max(0, 1 - (now - start) / duration);
        piece.style.transform = `translate(${x}px, ${y}px) rotate(${rotation * t}deg)`;
        piece.style.opacity = String(op);
        if (now - start < duration) {
          requestAnimationFrame(tick);
        } else {
          piece.remove();
        }
      }
      requestAnimationFrame(tick);
    }
  }

  /* ---------- Abrir modal ---------- */
  function openModal() {
    modal.classList.add("show", "flex");
    document.body.style.overflow = "hidden";
    launchConfetti();
  }
  function hideModal() {
    modal.classList.remove("show", "flex");
    document.body.style.overflow = "";
  }

  btn.addEventListener("click", openModal);
  closeModal?.addEventListener("click", hideModal);
  modal.querySelector(".modal-backdrop")?.addEventListener("click", hideModal);
})();
