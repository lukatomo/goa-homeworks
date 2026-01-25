// 2) Calculator using switch-case
let num1 = 10;
let num2 = 5;
let operator = "+";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  case "%":
    console.log(num1 % num2);
    break;
  default:
    console.log("Invalid operator");
}


// 3) Check vowel or consonant
let char = "a";

switch (char.toLowerCase()) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}


// 4) Month number → season
let month = 7;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  default:
    console.log("Invalid month");
}


// 5) Fruit price using switch-case
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Price: $2");
    break;
  case "banana":
    console.log("Price: $1");
    break;
  case "mango":
    console.log("Price: $3");
    break;
  default:
    console.log("Fruit not available");
}


// 6) Even or odd (ternary)
let n = 7;
console.log(n % 2 === 0 ? "Even" : "Odd");


// 7) Positive, negative, or zero (nested ternary)
let number = -3;
console.log(
  number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero"
);


// 8) Greater of two numbers (ternary)
let a = 8;
let b = 12;
console.log(a > b ? a : b);


// 9) Check voting age (18+)
let age = 17;
console.log(age >= 18 ? "Can vote" : "Cannot vote");


// 10) Arrow function: square of a number
const square = x => x * x;
console.log(square(5));


// 11) Arrow function: sum of two numbers
const sum = (x, y) => x + y;
console.log(sum(4, 6));


// 12) Arrow function: even or odd
const evenOrOdd = x => (x % 2 === 0 ? "Even" : "Odd");
console.log(evenOrOdd(10));


// 13) Arrow function: larger of two numbers
const max = (x, y) => (x > y ? x : y);
console.log(max(9, 3));
// 14) Sum of all arguments
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumAll(1, 2, 3, 4));


// 15) Find maximum value from arguments
function findMax() {
  let max = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(findMax(5, 12, 3, 20));


// 16) Find smallest number from arguments
function findMin() {
  let min = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] < min) {
      min = arguments[i];
    }
  }
  return min;
}
console.log(findMin(8, 2, 10, 4));


// 17) Count how many arguments were passed
function countArgs() {
  return arguments.length;
}
console.log(countArgs(1, "a", true, 5));
