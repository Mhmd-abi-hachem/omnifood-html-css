const navBtn = document.querySelector(".btn-mobile-nav");
const headerELement = document.querySelector(".header");

// mobile navigation toggle
navBtn.addEventListener("click", function () {
  headerELement.classList.toggle("nav-open");
});

// sticky navigation

const heroSection = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSection);
