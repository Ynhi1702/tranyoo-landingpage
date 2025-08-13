    // Scroll effect – Header background
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Toggle menu khi bấm hamburger
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Đóng menu khi click vào một link
const navItems = document.querySelectorAll("#navLinks li a");

navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
const overlay = document.getElementById("menu-overlay");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("show");
  overlay.classList.remove("show");
});

// Hero slider – tự động chuyển ảnh
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slider .slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);

// Gallery thumbnail click (nếu bạn dùng gallery)
const thumbnails = document.querySelectorAll(".thumbnail");
const mainImage = document.getElementById("gallery-main");

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    thumbnails.forEach(t => t.classList.remove("active"));
    thumbnail.classList.add("active");
    mainImage.src = thumbnail.src;
  });
});

// Fade-in animation for features
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".feature-item").forEach(item => {
  observer.observe(item);
});

// Hero slider tự động chuyển
let currentSlide = 0;
const slides = document.querySelectorAll('.auto-slider .slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000); // 3 giây đổi ảnh