// =======================
// Mobile Menu Toggle
// =======================
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// =======================
// Dark/Light Mode Toggle
// =======================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem('dark', isDark ? '1' : '0');

  // Update icon (moon/sun)
  themeIcon.innerHTML = isDark
    ? '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>'
    : '<path d="M12 3v1M12 20v1M4.2 4.2l.7.7M18.1 18.1l.7.7M1 12h1M22 12h1M4.2 19.8l.7-.7M18.1 5.9l.7-.7M12 7a5 5 0 100 10 5 5 0 000-10z"/>';
}

// Initialize theme
const saved = localStorage.getItem('dark');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(saved === null ? prefersDark : saved === '1');

themeToggle.addEventListener('click', () => {
  const isDark = !document.documentElement.classList.contains('dark');
  setTheme(isDark);
});

// =======================
// GSAP Hero Animation
// =======================
window.addEventListener('load', () => {
  gsap.from('#hero-title', {
    y: 30,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  });

  gsap.from('section#home p, section#home a', {
    y: 12,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    stagger: 0.08
  });
});

// =======================
// AOS (Animate On Scroll) Init
// =======================
AOS.init({
  duration: 1000,
  once: true,
});

// =======================
// Dynamic Footer Year
// =======================
document.getElementById('year').textContent = new Date().getFullYear();
