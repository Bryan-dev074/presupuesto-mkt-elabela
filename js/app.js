/* =====================================================================
   app.js · Núcleo: navbar, scroll, menú móvil, reveal, año dinámico
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- Navbar con efecto al hacer scroll ---------- */
  const navShell = document.querySelector(".nav-shell");
  const onScroll = () => {
    if (window.scrollY > 24) navShell?.classList.add("scrolled");
    else navShell?.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menú móvil ---------- */
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileToggle?.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("hidden") === false;
    mobileToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".mobile-link").forEach((link) =>
    link.addEventListener("click", () => {
      mobileMenu?.classList.add("hidden");
      mobileToggle?.setAttribute("aria-expanded", "false");
    })
  );

  /* ---------- Reveal on scroll (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Cerrar modal con tecla Escape ---------- */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const modal = document.getElementById("commitModal");
      if (modal?.classList.contains("show")) {
        modal.classList.remove("show", "flex");
        document.body.style.overflow = "";
      }
    }
  });
})();
