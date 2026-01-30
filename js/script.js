const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');
const menu = document.getElementById('menu');
const toggleBtn = document.querySelector('.menu-toggle');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const page = link.dataset.page;

        pages.forEach(p => p.classList.remove('active'));
        document.getElementById(page).classList.add('active');

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        menu.classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
