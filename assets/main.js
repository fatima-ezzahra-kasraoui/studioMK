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
    var header = document.querySelector(".site-header");
if (header) {
  var onScroll = function () {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
// Lightbox pour les galeries projet
var galleryImgs = document.querySelectorAll(".project-gallery .project-photo img");
if (galleryImgs.length) {
  var images = Array.prototype.map.call(galleryImgs, function (img) {
    return { src: img.getAttribute("src"), alt: img.getAttribute("alt") };
  });
  var currentIndex = 0;

  var overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Fermer">' +
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></svg></button>' +
    '<button class="lightbox-prev" aria-label="Image précédente">' +
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="15 18 9 12 15 6"/></svg></button>' +
    '<img src="" alt="">' +
    '<button class="lightbox-next" aria-label="Image suivante">' +
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="9 18 15 12 9 6"/></svg></button>';
  document.body.appendChild(overlay);

  var lbImg = overlay.querySelector("img");
  var closeBtn = overlay.querySelector(".lightbox-close");
  var prevBtn = overlay.querySelector(".lightbox-prev");
  var nextBtn = overlay.querySelector(".lightbox-next");

  function showImage(index) {
    currentIndex = (index + images.length) % images.length;
    lbImg.src = images[currentIndex].src;
    lbImg.alt = images[currentIndex].alt || "";
  }

  function openLightbox(index) {
    showImage(index);
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  galleryImgs.forEach(function (img, i) {
    img.addEventListener("click", function () {
      openLightbox(i);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", function () { showImage(currentIndex - 1); });
  nextBtn.addEventListener("click", function () { showImage(currentIndex + 1); });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (!overlay.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
  });
}
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
    // Stagger automatique pour les grilles de cartes
document.querySelectorAll(".project-grid, .services-list, .pillars").forEach(function (grid) {
  var items = grid.querySelectorAll(".reveal");
  items.forEach(function (item, i) {
    item.style.transitionDelay = (i * 80) + "ms";
  });
});
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
