// 1. Convert a number to a string using String()
let num = 42;
let numToStr = String(num);
console.log(numToStr);        // "42"
console.log(typeof numToStr); // string

// 2. Convert a boolean value to a string using String()
let bool = true;
let boolToStr = String(bool);
console.log(boolToStr);        // "true"
console.log(typeof boolToStr); // string

// 3. Convert a string containing a number to a number using Number()
let strNum = "123";
let strToNum = Number(strNum);
console.log(strToNum);        // 123
console.log(typeof strToNum); // number

// 4. Use Number() to convert a boolean to a number
let trueToNum = Number(true);
let falseToNum = Number(false);
console.log(trueToNum);  // 1
console.log(falseToNum); // 0

// 5. Check what happens when you use Number() on a non-numeric string
let notANumber = "hello";
let result = Number(notANumber);
console.log(result);        // NaN
console.log(typeof result); // number (NaN is still a number type)

// 6. let number = Number(prompt("Enter a number:"));

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// 7. let age = Number(prompt("Enter your age:"));

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You are not eligible to vote.");
}

// 8. let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

if (num1 > num2) {
  console.log("The first number is larger.");
} else if (num2 > num1) {
  console.log("The second number is larger.");
} else {
  console.log("Both numbers are equal.");
}
