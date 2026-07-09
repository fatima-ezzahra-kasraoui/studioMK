// Studio Madaji Khaoula — script du site (indépendant, vanilla JS)

document.addEventListener("DOMContentLoaded", function () {
  // Menu mobile
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Filtre de projets (page Projets uniquement)
  var chips = document.querySelectorAll(".filter-chip");
  var categories = document.querySelectorAll(".project-category");
  if (chips.length && categories.length) {
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) {
          c.classList.remove("active");
        });
        chip.classList.add("active");
        var target = chip.getAttribute("data-filter");
        categories.forEach(function (cat) {
          if (target === "all" || cat.getAttribute("data-category") === target) {
            cat.style.display = "";
          } else {
            cat.style.display = "none";
          }
        });
      });
    });
  }

  // Emplacement photo — affiche le placeholder tant que l'image n'existe pas
  document.querySelectorAll(".project-photo img, .thumb img[data-placeholder]").forEach(function (img) {
    img.addEventListener("error", function () {
      img.closest(".project-photo, .thumb").classList.add("img-missing");
    });
  });

  // Animation au défilement
  var reveals = document.querySelectorAll(".reveal");
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reveals.length && !prefersReduced && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("in-view");
    });
  }
});
