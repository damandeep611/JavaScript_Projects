// fetching weather api data
require("dotenv").config();
const apiKey = "process.env.WEATHER_API_KEY";

const baseUrl = "http://api.weatherapi.com/v1";
const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchBtn");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const weatherInfo = document.getElementById("weatherInfo");
const weatherIcon = document.getElementById("weatherIcon");

searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  fetch(`${baseUrl}/current.json?key=${apiKey}&q=${location}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        // Handle errors
        console.error("Error:", data.error.message);
        // Display error message to user
      } else {
        const city = data.location.name;
        const temp = Math.round(data.current.temp_c);
        const weather = data.current.condition.text;
        const iconCode = data.current.condition.icon;

        locationElement.textContent = city;
        temperatureElement.textContent = `${temp}°C`;
        descriptionElement.textContent = weather;
        weatherIcon.src = `https:${iconCode}`; // WeatherAPI.com uses HTTPS for icons

        weatherInfo.classList.remove("hidden"); // Show weather info
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      // Handle network errors
    });
}
// ? ===============================================theme changer====================
// Theme switcher logic
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Function to toggle theme
function toggleTheme() {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    themeToggle.classList.remove("fa-sun");
    themeToggle.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    themeToggle.classList.remove("fa-moon");
    themeToggle.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  }
}

// Check for saved theme preference or prefer-color-scheme
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  html.classList.add("dark");
  themeToggle.classList.remove("fa-moon");
  themeToggle.classList.add("fa-sun");
}

// Add click event listener to theme toggle button
themeToggle.addEventListener("click", toggleTheme);
