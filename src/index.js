function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "f84focad66b46c3637d8a9tf61e1920f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  console.log(searchInput.value);

  searchCity(searchInput.value);
}

document.addEventListener("DOMContentLoaded", function () {
  let searchFormElement = document.querySelector("#search-form");

  if (searchFormElement) {
    searchFormElement.addEventListener("submit", handleSearchSubmit);
  } else {
    console.error(
      "Error: The form element with ID '#search-form' was not found."
    );
  }
});

searchCity("London");
