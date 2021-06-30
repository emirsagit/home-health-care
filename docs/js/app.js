/**
 * Add css border to nav element for displaying current page
 */
const path = window.location.pathname;
if (path === '/' || path === '/home-health-care/index.html' || path === '/index.html') {
  document.getElementById('home').classList.add('nav__link--border');
} else if (path === '/about.html' || path === '/home-health-care/about.html') {
  document.getElementById('about').classList.add('nav__link--border');
}

/**
 * Mobile menu navigation bar display and hide
 */
const toggleElements = ['hamburger', 'close-button', 'home', 'about'];

const nav = document.getElementById('nav');
function toggle() {
  if (!nav.classList.contains('nav--mobile-hidden')) {
    nav.style.animation = 'close 1s ease-in-out';
    setTimeout(() => {
      nav.classList.toggle('nav--mobile-hidden');
    }, 1000);
  } else {
    nav.style.animation = 'open 1s ease-in-out';
    nav.classList.toggle('nav--mobile-hidden');
  }
}

for (let i = 0; i < toggleElements.length; i += 1) {
  document.getElementById(toggleElements[i]).addEventListener('click', toggle);
}