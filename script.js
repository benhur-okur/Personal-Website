/* ============================================================
   Benhur Okur — Portfolio interactions
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Theme toggle (persisted) ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') document.body.classList.add('light');

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const menuLinks = document.getElementById('menuLinks');

  menuToggle.addEventListener('click', () => menuLinks.classList.toggle('open'));
  menuLinks.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => menuLinks.classList.remove('open'))
  );

  /* ---------- Header shadow + scroll progress ---------- */
  const header = document.getElementById('header');
  const progress = document.getElementById('scrollProgress');

  function onScroll() {
    const scrollTop = window.scrollY;
    header.classList.toggle('scrolled', scrollTop > 10);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = docHeight > 0 ? (scrollTop / docHeight) * 100 + '%' : '0%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // subtle stagger for grouped elements
          entry.target.style.transitionDelay = Math.min(i * 60, 180) + 'ms';
          entry.target.classList.add('show');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- Active nav link on scroll-spy ---------- */
  const sections = document.querySelectorAll('main section[id], #hero');
  const navLinkMap = {};
  document.querySelectorAll('.menu-links a[href^="#"]').forEach((a) => {
    navLinkMap[a.getAttribute('href').slice(1)] = a;
  });

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = navLinkMap[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          Object.values(navLinkMap).forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    },
    { threshold: 0.5 }
  );
  sections.forEach((s) => spyObserver.observe(s));

  /* ---------- Current year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
