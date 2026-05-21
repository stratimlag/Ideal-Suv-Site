/* Tabs, scroll-reveal, scroll-to-top */

// Tab switching (whitelisted category ids only)
const VALID_TABS = new Set(['water','cooler2','cooler3','used','acc']);

function switchTab(cat, clickedBtn) {
  if (!VALID_TABS.has(cat)) return;
  document.querySelectorAll('.product-cat').forEach(c => c.classList.remove('active'));
  const target = document.getElementById('cat-' + cat);
  if (target) target.classList.add('active');
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  if (clickedBtn) clickedBtn.classList.add('active');
}

// Wire tab buttons via event listeners (no inline onclick, compatible with CSP)
document.querySelectorAll('.tab[data-tab]').forEach(btn => {
  btn.addEventListener('click', function () {
    switchTab(this.dataset.tab, this);
  });
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navlinks  = document.getElementById('navlinks');
if (hamburger && navlinks) {
  hamburger.addEventListener('click', function () {
    navlinks.classList.toggle('open');
  });
}

// Scroll reveal
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Scroll to top button
const toTopBtn = document.getElementById('totop');
if (toTopBtn) {
  toTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  window.addEventListener('scroll', () => {
    toTopBtn.classList.toggle('visible', window.scrollY > 500);
  });
}
