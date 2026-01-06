const navToggle = document.getElementById("nav-toggle");
const navList = document.querySelector(".nav-list");

/* Toggle menu */
navToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});

/* Close menu when clicking link (mobile UX) */
document.querySelectorAll(".nav-list a").forEach(link => {
  link.addEventListener("click", () => {
    navList.classList.remove("show");
  });
});


document.addEventListener("DOMContentLoaded", () => {

  const animatedElements = document.querySelectorAll(
    ".header-title, .beauty-section, .about-detail, .image-wrapper, .product-card, .contect-box, .contect-img"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // repeat animation
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedElements.forEach(el => {
    // image right side, baaki left/up
    if (el.classList.contains("image-wrapper") || el.classList.contains("product-card")) {
      el.classList.add("hidden-up");
    } else {
      el.classList.add("hidden-left");
    }
    observer.observe(el);
  });

});
