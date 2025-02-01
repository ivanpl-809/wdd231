// Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;

// Hamburger Toggle
document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('show');
});

// Set current date and time in hidden field
const currentDateField = document.getElementById('currentdate');
currentDateField.value = new Date().toLocaleString();

// Modal functionality
const modalLinks = document.querySelectorAll('.modal-link');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-modal');

modalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetModal = document.querySelector(link.getAttribute('href'));
        targetModal.style.display = 'flex';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetModal = button.closest('.modal');
        targetModal.style.display = 'none';
    });
});

// Parse URL parameters and display form data on thankyou.html
if (window.location.pathname.includes('thankyou.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('fname').textContent = urlParams.get('fname');
    document.getElementById('lname').textContent = urlParams.get('lname');
    document.getElementById('title').textContent = urlParams.get('title');
    document.getElementById('email').textContent = urlParams.get('email');
    document.getElementById('cellphone').textContent = urlParams.get('cellphone');
    document.getElementById('bizname').textContent = urlParams.get('bizname');
    document.getElementById('websiteURL').textContent = urlParams.get('websiteURL');
    document.getElementById('level').textContent = urlParams.get('level');
    document.getElementById('description').textContent = urlParams.get('description');
    document.getElementById('currentdate').textContent = urlParams.get('currentdate');
}