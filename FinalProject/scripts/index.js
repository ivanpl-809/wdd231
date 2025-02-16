const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.getElementById('navbar');

if (hamburgerMenu && navbar) {
    hamburgerMenu.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });
}

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

const dishCards = document.querySelectorAll('.dish-card');
dishCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});