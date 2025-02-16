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

// Menu Data
const menuItems = [
    {
        name: "Greek Salad",
        image: "images/salad.jpg",
        description: "Fresh vegetables, feta cheese, and olives."
    },
    {
        name: "Grilled Salmon",
        image: "images/salad.jpg",
        description: "Perfectly grilled salmon with a side of quinoa."
    },
    {
        name: "Vegetarian Wrap",
        image: "images/salad.jpg",
        description: "Loaded with fresh veggies and hummus."
    },
    {
        name: "Caprese Salad",
        image: "images/salad.jpg",
        description: "Fresh mozzarella, tomatoes, and basil."
    },
    {
        name: "Avocado Toast",
        image: "images/salad.jpg",
        description: "Creamy avocado on whole-grain toast."
    },
    {
        name: "Chicken Caesar Salad",
        image: "images/salad.jpg",
        description: "Classic Caesar salad with grilled chicken."
    },
    {
        name: "Pasta Primavera",
        image: "images/salad.jpg",
        description: "Pasta with fresh seasonal vegetables."
    },
    {
        name: "Berry Smoothie Bowl",
        image: "images/salad.jpg",
        description: "A refreshing blend of berries and yogurt."
    }
];

// Dynamically Add Menu Cards
const menuGrid = document.getElementById('menu-grid');

menuItems.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="card-content">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        </div>
    `;

    menuGrid.appendChild(card);
});