// Hamburger Menu Toggle
document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('show');
});

// Current Year and Last Modified
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Form Validation and Submission
const reservationForm = document.querySelector('.reservation form');
reservationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    if (name && email && date && time && guests) {
        alert(`Thank you, ${name}! Your reservation for ${guests} guests on ${date} at ${time} has been confirmed.`);
        reservationForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Additional Interactivity for Form Inputs
const inputs = document.querySelectorAll('.reservation input');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.borderColor = '#f1c40f';
    });
    input.addEventListener('blur', () => {
        input.style.borderColor = '#ccc';
    });
});