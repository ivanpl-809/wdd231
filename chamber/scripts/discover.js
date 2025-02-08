// Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;

// Hamburger Toggle
document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('show');
});


const visitMessage = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const currentVisit = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysSinceLastVisit = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysSinceLastVisit < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        visitMessage.textContent = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit === 1 ? '' : 's'} ago.`;
    }
}

localStorage.setItem('lastVisit', currentVisit);

const discoverGrid = document.getElementById('discover-grid');

fetch('data/attractions.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(attraction => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <h2>${attraction.title}</h2>
                <figure>
                    <img src="${attraction.image}" alt="${attraction.title}" loading="lazy">
                </figure>
                <address>${attraction.address}</address>
                <p>${attraction.description}</p>
                <button>Learn More</button>
            `;

            discoverGrid.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching JSON data:', error));