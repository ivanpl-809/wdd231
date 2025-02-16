// Hamburger Toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.getElementById('navbar');

if (hamburgerMenu && navbar) {
    hamburgerMenu.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });
}

// Current Year and Last Modified
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Parse URL parameters and display reservation details
const urlParams = new URLSearchParams(window.location.search);
document.getElementById('reservation-name').textContent = urlParams.get('name');
document.getElementById('reservation-date').textContent = urlParams.get('date');
document.getElementById('reservation-time').textContent = urlParams.get('time');
document.getElementById('reservation-guests').textContent = urlParams.get('guests');

// Generate a random reservation number between 1000 and 2000
const reservationNumber = Math.floor(Math.random() * 1001) + 1000;
document.getElementById('reservation-number').textContent = reservationNumber;