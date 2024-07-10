//============FizzBuzz============//
// var numToCheck = Number(window.prompt("FizzBuzz Game, Enter a number"));
// function fuzzBuzz(num) {
//   if (num % 5 == 0 && num % 3 == 0) {
//     document.writeln("<h1 style='color:orange'>FizzBuzz</h1>");
//   } else if (num % 3 == 0) {
//     document.writeln("<h1 style='color:blue'>fizz</h1>");
//   } else if (num % 5 == 0) {
//     document.writeln("<h1 style='color:peru'>Buzz</h1>");
//   } else {
//     document.writeln("<h1 style='color:red'>None</h1>");
//   }
// }
// fuzzBuzz(numToCheck);

//============Reverse a string============//
// var nameFromUser = window.prompt("Enter your name", "Abdelfattah");
// var reversedName = "";
// var reverseName = function (nameToReverse) {
//   for (let i = nameToReverse.length - 1; i >= 0; i--) {
//     reversedName += nameToReverse[i];
//   }
//   document.writeln(`<h1> ${reversedName} </h1>`);
// };
// reverseName(nameFromUser);

//============3 operations on 5 numbers============//
// var arr = [];
// for (let i = 0; i < 5; i++) {
//   arr.push(Number(window.prompt(`Enter a number # ${i + 1}`)));
// }


// //-------Summation-------//
// function sumNumber(arrOf5Num) {
//   var sum = 0;
//   for (let i = 0; i < 5; i++) {
//     sum += arrOf5Num[i];
//   }
//   document.writeln(`<h1>SUM = ${sum}</h1>`);
// }
// sumNumber(arr);

// //-------Multiplication-------//
// function multiplyNumber(arrOf5Num) {
//   var mul = 1;
//   for (let i = 0; i < 5; i++) {
//     mul *= arrOf5Num[i];
//   }
//   document.writeln(`<h1>MUL = ${mul}</h1>`);
// }
// multiplyNumber(arr);

// //-------Division-------//
// function divNumber(arrOf5Num) {
//   var div = 1;
//   for (let i = 0; i < 5; i++) {
//     div /= arrOf5Num[i];
//   }
//   document.writeln(`<h1>SUM = ${div}</h1>`);
// }
// divNumber(arr);



//============tack a string
//================and a character
//================to count the number of this character in the string ============//
// var str = window.prompt("Enter a string", "Abdelfattah");
// var char = window.prompt("Enter a character");

// function countCharacterInString(strParam, charParam) {
//   var count = 0;
//   for (let i = 0; i < strParam.length; i++) {
//     if (strParam[i] == charParam) {
//       count++;
//     }
//   }
//   document.writeln(
//     `<h1>The character
//      "<span style='color:red'>${charParam}</span>" occurs <span style='color:red'>${count}</span> times in the string <span style='color:red'>${strParam}</span> </h1>`
//   );
// }
// countCharacterInString(str, char);

//============tack a string
//================and a character
//================to get the indices of this character in the string ============//
var str = window.prompt("Enter a string", "Abdelfattah");
var char = window.prompt("Enter a character");

function countCharacterInString(strParam, charParam) {
  var indicesOfChar = [];
  for (let i = 0; i < strParam.length; i++) {
    if (strParam[i] == charParam) {
      indicesOfChar.push(i);
    }
  }
  document.write(
    `<h1>The character
     "<span style='color:red'>${charParam}</span>" appears in <span style='color:red'> [`
  );
  for (let i = 0; i < indicesOfChar.length; i++) {
    document.write(indicesOfChar[i] + ",");
  }
  document.write("]")
}

countCharacterInString(str, char);
