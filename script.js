const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');

if (toggle) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
}
