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


// Display form data on thankyou.html
if (window.location.pathname.includes('thankyou.html')) {
    const urlParams = new URLSearchParams(window.location.search);

    // Extract reservation details from URL parameters
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const date = urlParams.get('date');
    const time = urlParams.get('time');
    const guests = urlParams.get('guests');

    // Display reservation details on the page
    if (name) document.getElementById('name').textContent = name;
    if (email) document.getElementById('email').textContent = email;
    if (date) document.getElementById('date').textContent = date;
    if (time) document.getElementById('time').textContent = time;
    if (guests) document.getElementById('guests').textContent = guests;

    // Generate and display a random order number
    const orderNumber = Math.floor(Math.random() * 1000000);
    document.getElementById('orderNumber').textContent = orderNumber;
}