var xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();
var tbody = document.querySelector("#dataTable tbody");

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var response = xhr.responseText;
    var users = JSON.parse(response);

    for (let i = 0; i < users.length; i++) {
      var userData = users[i];

      var row = document.createElement("tr");
      var id = document.createElement("td");
      var name = document.createElement("td");
      var username = document.createElement("td");
      var email = document.createElement("td");
      var phone = document.createElement("td");
      var website = document.createElement("td");
      var city = document.createElement("td");
      var company = document.createElement("td");

      id.innerText = userData.id;
      name.innerText = userData.name;
      username.innerText = userData.username;
      email.innerText = userData.email;
      phone.innerText = userData.phone;
      website.innerText = userData.website;
      city.innerText = userData.address.city;
      company.innerText = userData.company.name;

      row.append(id, name, username, email, phone, website, city, company);

      tbody.appendChild(row);
    }
  }
};

// ==========================================================================


//===========accept only 2 parameters===========//
function checkNumOfArgu() {
  if (arguments.length == 2) {
  } else {
    throw new Error("Error: Enter only two parameters.");
  }
  console.log("It is OK");
}
// ------call------
checkNumOfArgu(1, "x");

//===========check the data type of parameters===========//

function addNumbers() {
  if (arguments.length === 0) {
    throw new Error(
      "Error: No arguments provided. Please pass numbers as arguments."
    );
  }

  for (let i = 0; i < arguments.length; i++) {
    var num = arguments[i];
    if (typeof num != "number" || isNaN(num)) {
      throw new Error(
        "Error: Invalid argument type. Please pass only numbers."
      );
    }
  }

  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    var num = arguments[i];
    sum += num;
  }

  console.log(sum);
}
// ------call------
addNumbers(1, 5, 2, 5, 88);


//===========reverse arguments===========//

function reverseArguments() {
  var argArray = [];
  for (let i = 0; i < arguments.length; i++) {
    argArray.push(arguments[i]);
  }
  console.log(argArray.reverse()); 
}

// ------call------
reverseArguments(1, 5, 6, 9);