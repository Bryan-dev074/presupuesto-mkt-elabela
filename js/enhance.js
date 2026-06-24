/* =====================================================================
   enhance.js · Mejoras de UX y animación
   · Barra de progreso de scroll
   · Scrollspy (resalta el enlace de navegación activo)
   · Botón "volver arriba"
   · Contadores animados de los KPIs del hero
   · Parallax sutil de los orbes de fondo
   ===================================================================== */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Barra de progreso de scroll ---------- */
  const progress = document.getElementById("scrollProgress");
  function updateProgress() {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
    if (progress) progress.style.width = pct + "%";
  }

  /* ---------- Botón volver arriba ---------- */
  const backBtn = document.getElementById("backToTop");
  function updateBackBtn() {
    if (!backBtn) return;
    if (window.scrollY > 600) backBtn.classList.add("is-visible");
    else backBtn.classList.remove("is-visible");
  }
  backBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  /* ---------- Scrollspy: enlace de navegación activo ---------- */
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const sections = navLinks
    .map((link) => {
      const id = link.getAttribute("href")?.slice(1);
      return id ? document.getElementById(id) : null;
    })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((l) =>
              l.classList.toggle("is-active", l.getAttribute("href") === "#" + id)
            );
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Contadores animados de KPIs ---------- */
  function animateCounter(el) {
    const raw = el.textContent.trim();
    const match = raw.match(/([^\d]*)(\d[\d.,]*)(.*)/);
    if (!match) return;
    const prefix = match[1];
    const target = parseFloat(match[2].replace(/,/g, ""));
    const suffix = match[3];
    if (!isFinite(target) || target === 0) return; // nada que animar (p.ej. "$0")

    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = prefix + val + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = prefix + match[2] + suffix;
    }
    requestAnimationFrame(tick);
  }

  const kpis = document.querySelectorAll(".kpi-num");
  if (kpis.length && !reduceMotion && "IntersectionObserver" in window) {
    const counterObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    kpis.forEach((el) => counterObs.observe(el));
  }

  /* ---------- Parallax sutil de los orbes ---------- */
  const orbs = document.querySelectorAll(".orb");
  let ticking = false;
  function applyParallax() {
    const y = window.scrollY;
    orbs.forEach((orb, i) => {
      const speed = (i + 1) * 0.04;
      orb.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    });
    ticking = false;
  }

  /* ---------- Bucle de scroll unificado (rAF) ---------- */
  function onScroll() {
    updateProgress();
    updateBackBtn();
    if (!reduceMotion && orbs.length && !ticking) {
      ticking = true;
      requestAnimationFrame(applyParallax);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateProgress, { passive: true });
  onScroll();
})();
