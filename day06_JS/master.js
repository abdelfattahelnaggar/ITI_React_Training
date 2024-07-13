function showText() {
  let colorValue = document.getElementById("color").value;
  let textValue = document.getElementById("text").value;

  console.log(colorValue);

  if (colorValue !== "") {
    document.getElementById("show").innerHTML = textValue;
    document.getElementById("show").style.display = "block";
    document.getElementById("show").style.color = "#fff";
    document.getElementById("show").style.backgroundColor = colorValue;
  } else if (textValue !== "" && colorValue === "") {
    document.getElementById("show").innerHTML = textValue;
    document.getElementById("show").style.color = "black";
    document.getElementById("show").style.display = "block";
    document.getElementById("show").style.backgroundColor = "transparent";
  } else if (textValue === "" && colorValue === "") {
    window.alert("At least enter one value");
  }
  
}

function addOper() {
  let firstNum = Number(document.getElementById("number1").value);
  let secondNum = Number(document.getElementById("number2").value);
  console.log(firstNum);

  if (isNaN(firstNum) || isNaN(secondNum)) {
    window.alert("Ensure that you enter a number in each field");
  } else {
    var addResult = `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;
    document.getElementById("addResult").innerHTML = addResult;
  }
}

function multOper() {
  let firstNum = Number(document.getElementById("number1").value);
  let secondNum = Number(document.getElementById("number2").value);
  console.log(firstNum);

  if (isNaN(firstNum) || isNaN(secondNum)) {
    window.alert("Ensure that you enter a number in each field");
  } else {
    var multResult = `${firstNum} x ${secondNum} = ${firstNum * secondNum}`;
    document.getElementById("multResult").innerHTML = multResult;
  }
}

