const path = window.location.pathname;
console.log(path);
if (path === '/') {
  document.getElementById('home').classList.add('nav__link--border');
} else if (path === '/about.html') {
  document.getElementById('about').classList.add('nav__link--border');
}
