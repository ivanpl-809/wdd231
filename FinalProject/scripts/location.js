// Hamburger Menu Toggle
document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('show');
});

// Current Year and Last Modified
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Additional Interactivity for Location Section
const locationInfo = document.querySelector('.location-info');
locationInfo.addEventListener('mouseenter', () => {
    locationInfo.style.backgroundColor = '#f9f9f9';
});
locationInfo.addEventListener('mouseleave', () => {
    locationInfo.style.backgroundColor = 'transparent';
});