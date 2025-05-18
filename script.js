// Theme Toggle Script
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const mode = document.body.classList.contains('dark') ? 'Light' : 'Dark';
  document.getElementById('themeToggle').textContent = `Switch to ${mode} Theme`;
});
// Animate Sections on Scroll
const fadeIns = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0.2s';
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeIns.forEach(section => {
  observer.observe(section);
});

