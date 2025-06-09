// Weather API code:

function displayWeather(response) {
  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;

  let temperature = Math.round(response.data.temperature.current);
  let displayTemperature = document.querySelector(".current-temperature");
  displayTemperature.innerHTML = `${temperature}°C`;

  let humidity = response.data.temperature.humidity;
  let displayHumidity = document.querySelector(".humidity");
  displayHumidity.innerHTML = `${humidity}%`;

  let wind = Math.round(response.data.wind.speed);
  let displayWind = document.querySelector(".wind");
  displayWind.innerHTML = `${wind} m/s`;

  let description = response.data.condition.description;
  let displayDescription = document.querySelector(".condition-description");
  displayDescription.innerHTML = `${description}`;

  let weatherIcon = document.querySelector(".material-symbols-outlined.main");
  let icon = "wb_sunny";

  if (description.toLowerCase().includes("rain")) {
    icon = "umbrella";
  } else if (description.toLowerCase().includes("cloud")) {
    icon = "cloud";
  } else if (
    description.toLowerCase().includes("sunny") ||
    description.toLowerCase().includes("clear")
  ) {
    icon = "wb_sunny";
  } else if (description.toLowerCase().includes("snow")) {
    icon = "mode_cool";
  } else if (description.toLowerCase().includes("storm")) {
    icon = "thunderstorm";
  } else if (
    description.toLowerCase().includes("mist") ||
    description.toLowerCase().includes("foggy")
  ) {
    icon = "foggy";
  }

  if (weatherIcon) {
    weatherIcon.innerHTML = icon;
  }

  getForecast(response.data.city);
}

// Search city code:
function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#add-city");

  let apiKey = "9ab043d0b59dfdb1606tfebb0401oaab";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city.value}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function getForecast(city) {
  let apiKey = "9ab043d0b59dfdb1606tfebb0401oaab";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

// Helper function to map weather descriptions to Material Symbol icons
function getWeatherIcon(description) {
  let icon = "wb_sunny";
  const desc = description.toLowerCase();
  if (desc.includes("rain")) {
    icon = "umbrella";
  } else if (desc.includes("cloud")) {
    icon = "cloud";
  } else if (desc.includes("sunny") || desc.includes("clear")) {
    icon = "wb_sunny";
  } else if (desc.includes("snow")) {
    icon = "mode_cool";
  } else if (desc.includes("storm")) {
    icon = "thunderstorm";
  } else if (desc.includes("mist") || desc.includes("foggy")) {
    icon = "foggy";
  }
  return icon;
}

function displayForecast(response) {
  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
      <div class="forecast-weather">
       <div class="forecast-date">${formatDay(day.time)}</div>
        <div class="material-symbols-outlined forecast-icon">
         ${getWeatherIcon(day.condition.description)}
        </div>
        <div class="unit">
          <span class="forecast-unit-max"><strong>${Math.round(
            day.temperature.maximum
          )}°C</strong></span>
          <span class="forecast-unit-min">${Math.round(
            day.temperature.minimum
          )}°C</span>
        </div>
      </div>
      `;
    }
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

function noWorking() {
  // This function is called when the "About Me" section is clicked
  alert("This section is not working yet. Coming soon!");
}

let aboutMe = document.querySelector(".about-me");
aboutMe.addEventListener("click", noWorking);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

// Current time code:
let now = new Date();
let today = document.querySelector(".today");
let hour = now.getHours();
let mins = now.getMinutes();
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = week[now.getDay()];
today.innerHTML = `${day} ${hour}:${mins < 10 ? "0" + mins : mins}`;

const menuButton = document.getElementById("menu-button");
const dropdown = menuButton.querySelector(".dropdown-menu");
menuButton.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});
document.addEventListener("click", function () {
  dropdown.style.display = "none";
});
