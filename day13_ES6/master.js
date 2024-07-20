/**
 * ============================== async_await (fetch) task ============================== *
 */
let data;
async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    data = await response.json();
    showDataOnTable(data);
  } catch (error) {
    console.log("your error" + error);
  }
}
getUsers();

function showDataOnTable(users) {
  for (let i = 0; i < 1; i++) {
    let userData = users[i];

    let tbody = document.querySelector("tbody");

    let row = document.createElement("tr");
    let id = document.createElement("td");
    let name = document.createElement("td");
    let username = document.createElement("td");
    let email = document.createElement("td");
    let phone = document.createElement("td");
    let website = document.createElement("td");
    let city = document.createElement("td");
    let company = document.createElement("td");

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

/**
 * ============================== OOP (shapes) task ============================== *
 */

class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw "Can't take an object from abstract class";
    }
  }
  area() {
    throw "Method 'area()' is not implemented";
  }
  perimeter() {
    throw "Method 'perimeter()' is not implemented";
  }
}

//-------------------------Circle-------------------------//

class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }

  //----------------------- Area = πr^2
  area() {
    return this.r * this.r * Math.PI;
  }

  //----------------------- Perimeter = 2πr
  perimeter() {
    return 2 * Math.PI * this.r;
  }
}

//-------------------------Square-------------------------//

class Square extends Shape {
  constructor(a) {
    super();
    this.a = a;
  }

  //----------------------- Area = a^2
  area() {
    return this.a * this.a;
  }

  //----------------------- Perimeter = 4a
  perimeter() {
    return this.a * 4;
  }
}

//-------------------------Rectangle-------------------------//

class Rectangle extends Shape {
  constructor(len, wid) {
    super();
    this.len = len;
    this.wid = wid;
  }

  //----------------------- Area = l * w
  area() {
    return this.len * this.wid;
  }

  //----------------------- Perimeter = 2(l+w)
  perimeter() {
    return 2 * (this.len + this.wid);
  }
}

// Handel circle button
let circleBtn = document.getElementById("cirBtn");
let circleAreaResult = document.getElementById("Carea");
let circlePerimeterResult = document.getElementById("Cperimeter");
circleBtn.addEventListener("click", function () {
  let circleR = Number(document.querySelector(
    ".shapesEquations .shape .inputs input"
  ).value);
  let circleOjb = new Circle(circleR);
  circleAreaResult.innerHTML = `Circle Area = ${(circleOjb.area()).toFixed(1)}`
  circlePerimeterResult.innerHTML = `Circle Perimeter = ${(circleOjb.perimeter()).toFixed(1)}`
});

