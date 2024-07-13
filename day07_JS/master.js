var stdCount = 0;
let nameValue = document.getElementById("nameInput");
let ageValue = document.getElementById("ageInput");
let tableData = document.getElementById("dataTable");

function addStudent() {
   
  let tr = document.createElement("tr");
  stdCount++;
  for (let i = 1; i <= 4; i++) {
    let td = document.createElement("td");
    if (i == 1) {
      td.innerHTML = stdCount;
      tr.appendChild(td);
    } else if (i == 2) {
      td.innerHTML = nameValue.value;
      tr.appendChild(td);
    } else if (i == 3) {
      td.innerHTML = ageValue.value;
      tr.appendChild(td);
    } else if (i == 4) {
      td.innerHTML =
        "<button id='removeButton' onclick='removeStudent(this)'><img src='./images/bin.png' alt='Trash'> Trash </button>";
      tr.appendChild(td);
    }
  }
  tableData.appendChild(tr);
  console.log(tableData);
  console.log(nameValue.value);
}

function removeStudent(button) {
  let buttonRow = button.parentNode.parentNode;
  buttonRow.remove(buttonRow);

  console.log(buttonRow);
}

//================================================

let sliderCount = 1;
var imgX = document.getElementById("imageSlider");
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
