function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  console.log(searchInput.value);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
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
