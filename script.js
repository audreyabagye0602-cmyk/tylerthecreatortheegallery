// SLIDESHOW
let slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(nextSlide, 4000);

// SCROLL FADE
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    obs.unobserve(entry.target);
  });
}, { threshold: 0.3 });

faders.forEach(el => observer.observe(el));

// Custom Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});
