/* ============================================
   Moss & Matcha — script.js
   Handles: nav shadow, mobile menu, fade-in
   on scroll, and the contact form.
   ============================================ */

// ---------- 1. Nav shadow on scroll ----------
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  // Add a soft shadow once the user scrolls past the hero top
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ---------- 2. Mobile hamburger menu ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});

// Close the mobile menu when a link is tapped
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// Make hover details work on touch devices (tap to toggle)
document.querySelectorAll('.menu-card').forEach(card => {
  card.addEventListener('click', () => {
    // close others
    document.querySelectorAll('.menu-card').forEach(c => {
      if (c !== card) c.classList.remove('active');
    });
    card.classList.toggle('active');
  });
});
// ---------- 3. Fade-in-up on scroll ----------
// IntersectionObserver watches each .fade-in element and
// adds .visible the first time it enters the viewport.
const fadeObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  {
    threshold: 0.15, // trigger when 15% of the element is visible
    rootMargin: '0px 0px -40px 0px' // slight bottom offset for a natural feel
  }
);

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ---------- 4. Contact form (front-end demo) ----------
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', event => {
  event.preventDefault(); // no backend yet — handle in-page
  formNote.hidden = false;
  form.reset();

  // Hide the thank-you note after a few seconds
  setTimeout(() => { formNote.hidden = true; }, 5000);
});
