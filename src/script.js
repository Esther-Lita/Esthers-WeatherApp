function getCurrentDate() {
  let currentTime = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[currentTime.getDay()];
  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  console.log(hours);

  return `${day} ${hours}:${minutes}`;
}

function dayTimeIcon(response) {
  let description = response.data.weather[0].main;

  if (description === "Clear") {
    return `icons/sun/sunny.png`;
  } else {
    if (description === "Clouds") {
      return `icons/sun/partly_cloudy.png`;
    } else {
      if (description === "Mist") {
        return `icons/sun/mist.png`;
      } else {
        if (description === "Rain") {
          return `icons/sun/day_rain.png`;
        } else {
          if (description === "snow") {
            return `icons/sun/day_snow.png`;
          }
        }
      }
    }
  }
}

function nightTimeIcon(response) {
  let description = response.data.weather[0].main;

  if (description === "Clear") {
    return `icons/moon/clear_night.png`;
  } else {
    if (description === "Clouds") {
      return `icons/moon/clouds_night.png`;
    } else {
      if (description === "Mist") {
        return `icons/moon/mist.png`;
      } else {
        if (description === "Rain") {
          return `icons/moon/night_rain.png`;
        } else {
          if (description === "snow") {
            return `icons/moon/night_snow.png`;
          }
        }
      }
    }
  }
}

function displaySearchedTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#displayed-temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-conditions").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#max-temp").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#min-temp").innerHTML = Math.round(
    response.data.main.temp_min
  );

  let weatherIcon = document.querySelector("#weather-emoji");
  weatherIcon.setAttribute("alt", response.data.weather[0].main);
  weatherIcon.setAttribute("src", dayTimeIcon(response));
}

function searchCity(city) {
  let apiKey = "8faf1e22ac6d107f05e8ab59a4150451";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displaySearchedTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function findLocation(position) {
  let apiKey = "8faf1e22ac6d107f05e8ab59a4150451";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displaySearchedTemp);
}

function getGeolocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(findLocation);
}

let dateElement = document.querySelector("#real-date");
let currentTime = new Date();
dateElement.innerHTML = getCurrentDate(currentTime);

let searchBtn = document.querySelector("#search-form");
searchBtn.addEventListener("submit", handleSubmit);

let currentLocationBtn = document.querySelector("#current-location-btn");
currentLocationBtn.addEventListener("click", getGeolocation);

searchCity("Arrecife");
