// Hamburger Toggle
document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('show');
});

// Current Year and Last Modified
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Additional Interactivity for Featured Dishes
const dishCards = document.querySelectorAll('.dish-card');
dishCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});