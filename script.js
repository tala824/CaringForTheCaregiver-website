/* ============================================
   Caring for the Caregiver — Scripts
   ============================================ */

function openBookingModal() {
  var container = document.getElementById('iframeContainer');
  var iframe = document.getElementById('bookingIframe');
  if (container && iframe) {
    iframe.src = 'https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_111016';
    container.style.display = 'block';
  }
}

(function () {
  'use strict';

  // --- Navbar scroll shadow ---
  const nav = document.getElementById('nav');
  function handleScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });

  // --- Mobile nav toggle ---
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', function () {
    links.classList.toggle('nav__links--open');
    toggle.classList.toggle('nav__toggle--open');
  });

  // Close mobile nav when a link is clicked
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('nav__links--open');
      toggle.classList.remove('nav__toggle--open');
    });
  });

  // --- Scroll reveal animations ---
  var revealTargets = document.querySelectorAll(
    '.about__text, .about__visual, .service-card, .approach__step, ' +
    '.testimonial__quote, .faq__item, .contact__content, .trust__item'
  );

  revealTargets.forEach(function (el) {
    el.classList.add('reveal');
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealTargets.forEach(function (el) {
    observer.observe(el);
  });

  // --- Contact form handling ---
  var form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var btn = form.querySelector('button[type="submit"]');
    var originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate submission (replace with real endpoint)
    setTimeout(function () {
      btn.textContent = 'Message Sent';
      btn.style.background = 'var(--olive-dark)';
      form.reset();

      setTimeout(function () {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1200);
  });
})();
