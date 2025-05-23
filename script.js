// Weather API code:

function displayWeather(response) {
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

  let weatherIcon = document.querySelector(".material-symbols-outlined");
  let icon = "wb_sunny"; // default

  if (description.toLowerCase().includes("rain")) {
    icon = "umbrella"; // Use a valid Material Symbols icon for rain
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
}

// Search city code:
function searchCity(event) {
  event.preventDefault();
  let addCity = document.querySelector("#add-city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${addCity.value}`;

  let apiKey = "9ab043d0b59dfdb1606tfebb0401oaab";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${addCity.value}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

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
