/* ============================================================
   MAIN.JS — Interactions
   ============================================================ */

(function () {
  "use strict";

  // --- Mobile Navigation Toggle ---
  const toggle = document.getElementById("navToggle");
  const links  = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("open");
      links.classList.toggle("open");
    });

    // Close menu when a link is clicked
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.classList.remove("open");
        links.classList.remove("open");
      });
    });
  }

  // --- Scroll Reveal (IntersectionObserver) ---
  const reveals = document.querySelectorAll(".reveal");

  if (reveals.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything if IntersectionObserver is not supported
    reveals.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  // ============================================================
  // HAZE INTERACTION SYSTEM
  // Mouse parallax + scroll fade — GPU-only transforms, zero reflow
  // ============================================================

  const haze = document.getElementById("hazeLayer");

  if (haze) {
    const orb1 = haze.querySelector(".haze__orb--1");
    const orb2 = haze.querySelector(".haze__orb--2");
    const orb3 = haze.querySelector(".haze__orb--3");

    // --- Lerp state: normalised mouse position [-1, 1] ---
    let targetX = 0, targetY = 0;
    let lerpX   = 0, lerpY   = 0;

    // --- Scroll state ---
    let currentScrollY = 0;
    let ticking = false;

    // --- 1. Mouse tracking ---
    window.addEventListener("mousemove", function (e) {
      // Map cursor to [-1, 1] relative to viewport centre
      targetX = (e.clientX / window.innerWidth  - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    // --- 2. Scroll fade ---
    function applyScrollFade() {
      // Linearly map [0 → 1vh] scroll to opacity [0.6 → 0]
      var progress = Math.min(currentScrollY / window.innerHeight, 1);
      haze.style.opacity = String(0.6 * (1 - progress));
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      currentScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(applyScrollFade);
        ticking = true;
      }
    }, { passive: true });

    // --- 3. Mouse parallax loop (rAF) ---
    function tick() {
      // Ease toward mouse target — 5% per frame = smooth, no jitter
      lerpX += (targetX - lerpX) * 0.05;
      lerpY += (targetY - lerpY) * 0.05;

      // Each orb moves by a different offset to create parallax depth:
      //  orb1 (amber)   — moves with the mouse
      //  orb2 (red)     — moves against, further depth
      //  orb3 (orange)  — offset mix for mid-layer
      if (orb1) {
        orb1.style.transform =
          "translate(" + (lerpX * 20).toFixed(2) + "px, " +
                         (lerpY * 20).toFixed(2) + "px)";
      }
      if (orb2) {
        orb2.style.transform =
          "translate(" + (lerpX * -35).toFixed(2) + "px, " +
                         (lerpY * -25).toFixed(2) + "px)";
      }
      if (orb3) {
        orb3.style.transform =
          "translate(" + (lerpX * 25).toFixed(2) + "px, " +
                         (lerpY * 30).toFixed(2) + "px)";
      }

      window.requestAnimationFrame(tick);
    }

    // Kick off the animation loop
    window.requestAnimationFrame(tick);
  }

})();
