/* Tabs, scroll-reveal, scroll-to-top */
// Tab switching (whitelisted category ids only)
const VALID_TABS = new Set(['water','cooler2','cooler3','used','acc']);
function switchTab(cat) {
  if (!VALID_TABS.has(cat)) return;
  document.querySelectorAll('.product-cat').forEach(c => c.classList.remove('active'));
  const target = document.getElementById('cat-' + cat);
  if (target) target.classList.add('active');
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  if (event && event.target && event.target.classList) event.target.classList.add('active');
}

// Scroll reveal
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Scroll to top button
const toTopBtn = document.getElementById('totop');
if (toTopBtn) {
  toTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  window.addEventListener('scroll', () => {
    toTopBtn.classList.toggle('visible', window.scrollY > 500);
  });
}
