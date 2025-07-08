// Dark mode toggle
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('.menu-links');
mobileMenu.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
});

// Scroll reveal animation
const animatedSections = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

animatedSections.forEach(section => {
  observer.observe(section);
});
