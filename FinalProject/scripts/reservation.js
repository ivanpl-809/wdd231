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


if (window.location.pathname.includes('thankyou.html')) {
    const urlParams = new URLSearchParams(window.location.search);

    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const date = urlParams.get('date');
    const time = urlParams.get('time');
    const guests = urlParams.get('guests');

    if (name) document.getElementById('name').textContent = name;
    if (email) document.getElementById('email').textContent = email;
    if (date) document.getElementById('date').textContent = date;
    if (time) document.getElementById('time').textContent = time;
    if (guests) document.getElementById('guests').textContent = guests;

    const orderNumber = Math.floor(Math.random() * 1000000);
    document.getElementById('orderNumber').textContent = orderNumber;
}