var myName = window.prompt("Enter your name", 'Abdelfattah Elnaggar');
let output = "";
for (let i = 1; i <= 6; i++) {
  document.writeln(`<h${i}>${myName}</h${i}>`);
}


// ====================Odd or Even ====================//

// var numberToCheck = Number(window.prompt("Enter a number", 2));
// if (numberToCheck % 2 == 0) {
//   document.writeln(` The number ${numberToCheck} is Even`);
// } else {
//   document.writeln(` The number ${numberToCheck} is Odd`);
// }


// ====================Positive or Negative ====================//

// var numberToCheck = Number(window.prompt("Enter a number", 2));
// if (numberToCheck > 0) {
//   document.writeln(` The number ${numberToCheck} is Positive`);
// } else if(numberToCheck < 0) {
//   document.writeln(` The number ${numberToCheck} is Negative`);
// } else {
//     document.writeln(` The number ${numberToCheck} is not a Positive or Negative it is a zero`);

// }

// ==================== check and print sum ====================//

var flag = true;
var sum = 0;
while (flag) {
  var numberToCheck = Number(window.prompt("Enter a number", 2));
  sum += numberToCheck;
  if (sum >= 100 || numberToCheck == 0) {
    flag = false;
  }
}
document.writeln(`The sum is ${sum}`);