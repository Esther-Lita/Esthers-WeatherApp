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
  hours = currentTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function showIcon() {
  if (weatherDescription === "Clear" && hours >= 19) {
    return `icons/moon/clear_night.png`;
  } else {
    if (weatherDescription === "Clear" && hours <= 06) {
      return `icons/moon/clear_night.png`;
    } else {
      if (weatherDescription === "Clear" && hours > 06) {
        return `icons/sun/sunny.png`;
      }
    }
  }

  if (weatherDescription === "Clouds" && hours >= 19) {
    return `icons/moon/clouds_night.png`;
  } else {
    if (weatherDescription === "Clouds" && hours <= 06) {
      return `icons/moon/clouds_night.png`;
    } else {
      if (weatherDescription === "Clouds" && hours > 06) {
        return `icons/sun/partly_cloudy.png`;
      }
    }
  }

  if (weatherDescription === "Mist" && hours >= 19) {
    return `icons/moon/mist.png`;
  } else {
    if (weatherDescription === "Mist" && hours <= 06) {
      return `icons/moon/mist.png`;
    } else {
      if (weatherDescription === "Mist" && hours > 06) {
        return `icons/sun/mist.png`;
      }
    }
  }

  if (weatherDescription === "Haze" && hours >= 19) {
    return `icons/moon/mist.png`;
  } else {
    if (weatherDescription === "Haze" && hours <= 06) {
      return `icons/moon/mist.png`;
    } else {
      if (weatherDescription === "Haze" && hours > 06) {
        return `icons/sun/mist.png`;
      }
    }
  }

  if (weatherDescription === "Fog" && hours >= 19) {
    return `icons/moon/mist.png`;
  } else {
    if (weatherDescription === "Fog" && hours <= 06) {
      return `icons/moon/mist.png`;
    } else {
      if (weatherDescription === "Fog" && hours > 06) {
        return `icons/sun/mist.png`;
      }
    }
  }

  if (weatherDescription === "Drizzel" && hours >= 19) {
    return `icons/moon/drizzel_night.png`;
  } else {
    if (weatherDescription === "Drizzel" && hours <= 06) {
      return `icons/moon/drizzel_night.png`;
    } else {
      if (weatherDescription === "Drizzel" && hours > 06) {
        return `icons/sun/drizzel_day.png`;
      }
    }
  }

  if (weatherDescription === "Smoke" && hours >= 19) {
    return `icons/moon/smoke_night.png`;
  } else {
    if (weatherDescription === "Smoke" && hours <= 06) {
      return `icons/moon/smoke_night.png`;
    } else {
      if (weatherDescription === "Smoke" && hours > 06) {
        return `icons/sun/fog.png`;
      }
    }
  }

  if (weatherDescription === "Dust" && hours >= 19) {
    return `icons/moon/smoke_night.png`;
  } else {
    if (weatherDescription === "Dust" && hours <= 06) {
      return `icons/moon/smoke_night.png`;
    } else {
      if (weatherDescription === "Dust" && hours > 06) {
        return `icons/sun/fog.png`;
      }
    }
  }

  if (weatherDescription === "Sand" && hours >= 19) {
    return `icons/moon/smoke_night.png`;
  } else {
    if (weatherDescription === "Sand" && hours <= 06) {
      return `icons/moon/smoke_night.png`;
    } else {
      if (weatherDescription === "Sand" && hours > 06) {
        return `icons/sun/fog.png`;
      }
    }
  }

  if (weatherDescription === "Ash" && hours >= 19) {
    return `icons/moon/fog_night.png`;
  } else {
    if (weatherDescription === "Ash" && hours <= 06) {
      return `icons/moon/fog_night.png`;
    } else {
      if (weatherDescription === "Ash" && hours > 06) {
        return `icons/sun/fog.png`;
      }
    }
  }

  if (weatherDescription === "Squall" && hours >= 19) {
    return `icons/cloud/squall.png`;
  } else {
    if (weatherDescription === "Squall" && hours <= 06) {
      return `icons/cloud/squall.png`;
    } else {
      if (weatherDescription === "Squall" && hours > 06) {
        return `icons/cloud/squall.png`;
      }
    }
  }

  if (weatherDescription === "Tornado" && hours >= 19) {
    return `icons/cloud/squall.png`;
  } else {
    if (weatherDescription === "Tornado" && hours <= 06) {
      return `icons/cloud/squall.png`;
    } else {
      if (weatherDescription === "Tornado" && hours > 06) {
        return `icons/cloud/squall.png`;
      }
    }
  }

  if (weatherDescription === "Snow" && hours >= 19) {
    return `icons/moon/night_snow.png`;
  } else {
    if (weatherDescription === "Snow" && hours <= 06) {
      return `icons/moon/night_snow.png`;
    } else {
      if (weatherDescription === "Snow" && hours > 06) {
        return `icons/sun/day_snow.png`;
      }
    }
  }

  if (weatherDescription === "Rain" && hours >= 19) {
    return `icons/cloud/rain.png`;
  } else {
    if (weatherDescription === "Rain" && hours <= 06) {
      return `icons/cloud/rain.png`;
    } else {
      if (weatherDescription === "Rain" && hours > 06) {
        return `icons/cloud/rain.png`;
      }
    }
  }

  if (weatherDescription === "Thunderstorm" && hours >= 19) {
    return `icons/moon/thundrestorm_night.png`;
  } else {
    if (weatherDescription === "Thunderstorm" && hours <= 06) {
      return `icons/moon/thundrestorm_night.png`;
    } else {
      if (weatherDescription === "Thunderstorm" && hours > 06) {
        return `icons/sun/thunderstorm.png`;
      }
    }
  }
}

function changeBackgroundColor() {
  let bodyElement = document.querySelector("#body");
  let containerElement = document.querySelector("#app-container");
  if (hours >= 19) {
    bodyElement.classList.remove("day-time");
    containerElement.classList.remove("day-time");
    bodyElement.classList.add("night-time");
    containerElement.classList.add("night-time");
  } else {
    if (hours < 19) {
      bodyElement.classList.remove("night-time");
      containerElement.classList.remove("night-time");
      bodyElement.classList.add("day-time");
      containerElement.classList.add("day-time");
    } else {
      if (hours <= 07) {
        bodyElement.classList.remove("day-time");
        containerElement.classList.remove("day-time");
        bodyElement.classList.add("night-time");
        containerElement.classList.add("night-time");
      } else {
        if (hours > 07) {
          bodyElement.classList.remove("night-time");
          containerElement.classList.remove("night-time");
          bodyElement.classList.add("day-time");
          containerElement.classList.add("day-time");
        }
      }
    }
  }
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return days[day];
}

function forecastIcon(weather) {
  if (weather === "Clouds") {
    return ` <img src="icons/sun/partly_cloudy.png" alt="clouded" class="expected-temp-emoji" />`;
  } else {
    if (weather === "Clear") {
      return ` <img src="icons/sun/sunny.png" alt="semi clouded" class="expected-temp-emoji" />`;
    } else {
      if (weather === "Rain") {
        return `  <img src="icons/cloud/rain.png" alt="semi clouded" class="expected-temp-emoji" />`;
      } else {
        if (weather === "Snow") {
          return `  <img src="icons/cloud/snow.png" alt="semi clouded" class="expected-temp-emoji" />`;
        } else {
          if (weather === "Thunderstorm") {
            return `  <img src="icons/cloud/thunderstorm.png" alt="semi clouded" class="expected-temp-emoji" />`;
          }
        }
      }
    }
  }
}

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#daily-forecast");

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `
         <div class="col-sm-2 day">
              <div class="expected-day">${formatDay(forecastDay.dt)}</div>
              <div>${forecastIcon(forecastDay.weather[0].main)}</div>
              <div class="expected-temp">
            <span class="forecast-expected-temp-max"> ${Math.round(
              forecastDay.temp.max
            )}° </span>
          <span class="forecast-expected-temp-min"> ${Math.round(
            forecastDay.temp.min
          )}° </span>
              </div>
            </div>
  `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "8faf1e22ac6d107f05e8ab59a4150451";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displaySearchedTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  celsiusTemperature = response.data.main.temp;
  document.querySelector("#displayed-temperature").innerHTML =
    Math.round(celsiusTemperature);

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;

  let windSpeed = response.data.wind.speed;
  windSpeed = windSpeed * 3.6;
  document.querySelector("#wind").innerHTML = Math.round(windSpeed);
  weatherDescription = response.data.weather[0].main;
  document.querySelector("#weather-conditions").innerHTML = weatherDescription;
  document.querySelector("#max-temp").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#min-temp").innerHTML = Math.round(
    response.data.main.temp_min
  );
  let weatherIcon = document.querySelector("#weather-emoji");
  weatherIcon.setAttribute("alt", weatherDescription);
  weatherIcon.setAttribute("src", showIcon());

  getForecast(response.data.coord);
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

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#displayed-temperature");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#displayed-temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let weatherDescription = null;
let celsiusTemperature = null;
let hours = null;

let dateElement = document.querySelector("#real-date");
let currentTime = new Date();
dateElement.innerHTML = getCurrentDate(currentTime);

let searchBtn = document.querySelector("#search-form");
searchBtn.addEventListener("submit", handleSubmit);

let currentLocationBtn = document.querySelector("#current-location-btn");
currentLocationBtn.addEventListener("click", getGeolocation);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

searchCity("Arrecife");
changeBackgroundColor();
