document.addEventListener("DOMContentLoaded", function () {
  const mainColorPicker = document.getElementById("colorPicker");
  const changeMainColorButton = document.getElementById("changeColorButton");
  const secondaryColorPicker = document.getElementById("secondaryColorPicker");
  const changeSecondaryColorButton = document.getElementById(
    "changeSecondaryColorButton"
  );

  const savedMainColor = localStorage.getItem("mainColor");
  if (savedMainColor) {
    document.documentElement.style.setProperty("--main-color", savedMainColor);
    mainColorPicker.value = savedMainColor;
  }

  changeMainColorButton.addEventListener("click", function () {
    const newColor = mainColorPicker.value;
    document.documentElement.style.setProperty("--main-color", newColor);
    localStorage.setItem("mainColor", newColor);
  });

  changeSecondaryColorButton.addEventListener("click", function () {
    const newColor = secondaryColorPicker.value;
    document.documentElement.style.setProperty("--secondary-color", newColor);
    sessionStorage.setItem("secondaryColor", newColor);
  });
});
// =======================================================

var latitude;
var longitude;

// Get current position
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  getPosition();
}

function error(e) {
  alert(e.message);
}

function getPosition() {
  if (latitude !== undefined && longitude !== undefined) {
    // Create request
    var request = new XMLHttpRequest();

    // Define request
    request.open(
      "GET",
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );

    // Send request
    request.send();

    request.onload = function () {
      if (request.status >= 200 && request.status < 300) {
        var data = JSON.parse(request.responseText);
        alert("Look to the console :)");
        console.log(data.city);
        console.log(data.principalSubdivision);
        console.log(data.countryName);
      } else {
        console.error("Request failed with status:", request.status);
      }
    };

    request.onerror = function () {
      console.error("Request failed");
    };
  }
  // else if (latitude == undefined && longitude == undefined) {
  //   console.error("Latitude and Longitude are not defined");
  // }
}

getPosition();
