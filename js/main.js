const toggleBtn = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

// Apply saved theme on load
document.documentElement.setAttribute('data-theme', currentTheme);
updateButtonText();

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  updateButtonText();
});

// Update button text based on theme
function updateButtonText() {
  toggleBtn.textContent = currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
}
