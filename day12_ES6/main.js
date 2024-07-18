/**
 * Swapping Two numbers by structing
 */
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let oldResult = document.getElementById("oldResultP");
let newResult = document.getElementById("newResultP");
let btn = document.getElementById("btn1");
btn.addEventListener("click", () => {
  oldResult.innerHTML = `<h1>Old First Number: ${num1.value},   Old Second Number: ${num2.value}</h1>`;
  [num1, num2] = [num2, num1];
  newResult.innerHTML = `<h2> New First Number: ${num1.value},   New Second Number: ${num2.value}</h2>`;
});

/**
 * Find max and min
 */
function findMinMax(...numbers) {

  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return { max, min };
}

const numbers = [3, 5, 7, 2, 8, -1, 4, 10, -10];
const { max, min } = findMinMax(...numbers);
console.log(`Max value: ${max}`);
console.log(`Min value: ${min}`);

/**
 * Array API
 */
console.log("================Third Task================");
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

//a. test that every element in the given array is a string

let typeOfOutput = () => fruits.every((item) => typeof item === "string");
console.log(typeOfOutput());

//b. test that some of array elements starts with "a"

let someStartsWithAOutput = () => fruits.some((item) => item.startsWith("a"));
console.log(someStartsWithAOutput());

//c. generate new array filtered from the given array with only elements that starts with "b" or "s"

let filteredNewArrayStartsWith_b_s_Output = () =>
  fruits.filter(item => item.startsWith("b") || item.startsWith("s"));

console.log(filteredNewArrayStartsWith_b_s_Output());


//d. generate new array each element of the new array contains a string declaring that you like the give fruit element
let newArrayWithILike = () => fruits.map(fruits => `I like ${fruits}`)
console.log(newArrayWithILike());

//e. use forEach to display all elements of the new array from previous point
newArrayWithILike().forEach(element => {console.log(element);
  
});