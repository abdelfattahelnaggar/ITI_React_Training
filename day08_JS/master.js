let sliderCount = 1;
var imgX = document.getElementById("imageSlider");
var myInterval;

function prevImage() {
  --sliderCount;
  if (sliderCount == 0) sliderCount = 5;
  imgX.setAttribute("src", `./images/slider/${sliderCount}.jpg`);
}
function nextImage() {
  ++sliderCount;
  if (sliderCount == 6) sliderCount = 1;
  imgX.setAttribute("src", `./images/slider/${sliderCount}.jpg`);
}

function start() {
  myInterval = setInterval(function () {
    ++sliderCount;
    if (sliderCount == 6) sliderCount = 1;
    imgX.setAttribute("src", `./images/slider/${sliderCount}.jpg`);
  }, 1500);
}

function stop() {
  clearInterval(myInterval);
}
/**
 * ===========================================================================
 */

var trafficWindow;
function openTLPage() {
  trafficWindow = window.open("./trafficLights.html", "");
}

var redLamp = document.getElementById("red");
var yellowLamp = document.getElementById("yellow");
var greenLamp = document.getElementById("green");
var stateText = document.getElementById("state");
var currentLamp = 0;

function startTraffic() {
  setInterval(function () {
    ++currentLamp;
    if (currentLamp == 4) {
      currentLamp = 0;
    } else {
      switch (currentLamp) {
        case 1:
          redLamp.style.backgroundColor = "red";
          stateText.innerText = "Ready";
          stateText.style.color = "red";
          greenLamp.style.backgroundColor = "rgba(0, 128, 0, 0.3)";
          yellowLamp.style.backgroundColor = "rgba(255, 255, 0, 0.3)";
          break;
        case 2:
          redLamp.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
          greenLamp.style.backgroundColor = "rgba(0, 128, 0, 0.3)";
          yellowLamp.style.backgroundColor = "yellow";
          stateText.innerText = "Steady";
          stateText.style.color = "yellow";
          break;
        case 3:
          redLamp.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
          greenLamp.style.backgroundColor = "green";
          stateText.innerText = "Go";
          stateText.style.color = "green";
          yellowLamp.style.backgroundColor = "rgba(255, 255, 0, 0.3)";

          break;
      }
    }
  }, 1500);
}
startTraffic();

/**
 * ===========================================================================
 */

var alertWindow;
function openAlertPage() {
  alertWindow = window.open("./alertPage.html", "");
}
var container = document.getElementById("message");
var p = document.getElementById("myP");
var h1 = document.getElementById("myH1");
var icon = document.getElementById("Icon");
function errorAlert() {
  container.style.color = "red";
  p.innerText = "This is an Error Message";
  h1.innerText = "Error";
  icon.setAttribute("class", "fas fa-times-circle");
}
function succAlert() {
  container.style.color = "green";
  p.innerText = "This is a Success Message";
  h1.innerText = "Success";
  icon.setAttribute("class", "fas fa-check-circle");
}
