function toggleMenu() {
  document.getElementById('menu').classList.toggle('active');
}

// active nav + close menu on click
document.querySelectorAll('.nav-menu a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }

  link.addEventListener('click', () => {
    document.getElementById('menu').classList.remove('active');
  });
});
