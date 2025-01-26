// Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;

// Hamburger Toggle
document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('show');
});

// Weather Section
const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?lat=41.04&lon=-111.94&units=imperial&appid=c917aec702bc6a2870617975229469d7";

async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Weather data not found");

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById("weather").innerHTML = `<p>Unable to fetch weather data.</p>`;
        console.error(error);
    }
}

function displayWeather(data) {
    const {weather, main, wind } = data;
    const weatherHTML = `
        <h3>Current Weather</h3>
        <p><strong>Condition:</strong> ${weather[0].description}</p>
        <p><strong>Temperature:</strong> ${main.temp}°C</p>
        <p><strong>Humidity:</strong> ${main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
    `;
    document.getElementById("weather").innerHTML = weatherHTML;
}

fetchWeather();

// Spotlight Section
async function fetchSpotlights() {
    try {
      // Fetch JSON data
      const response = await fetch("./data/members.json");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  
      const data = await response.json();
      console.log("Fetched data:", data); // Debugging
  
      const members = data.members;
  
      // Filter for gold or silver members
      const eligibleMembers = members.filter(
        (member) =>
          member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
      );
      console.log("Eligible members:", eligibleMembers); // Debugging
  
      // Randomly select two or three members
      const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
      const spotlights = shuffled.slice(0, 3);
      console.log("Spotlights:", spotlights); // Debugging
  
      // Populate spotlight section
      const spotlightSection = document.querySelector(".home-card:nth-child(3) ul");
      if (!spotlightSection) {
        console.error("Spotlight section not found in the DOM.");
        return;
      }
      console.log("Spotlight section:", spotlightSection); // Debugging
  
      spotlightSection.innerHTML = spotlights
        .map(
          (member) => `
          <li class="spotlight">
            <img src="${member.image}" alt="${member.name} Logo" />
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p>Membership Level: ${member.membershipLevel}</p>
          </li>
        `
        )
        .join("");
  
      console.log("Spotlight section updated successfully!"); // Debugging
    } catch (error) {
      console.error("Error fetching or processing member data:", error);
    }
  }
  
  // Fetch spotlights when the script loads
  fetchSpotlights();
  
