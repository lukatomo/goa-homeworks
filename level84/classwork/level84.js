let num = prompt("შეიყვანეთ რიცხვი:");
let floatNum = parseFloat(num);
let intPart = Math.trunc(floatNum);
let powerResult = Math.pow(floatNum, floatNum);

console.log(floatNum);
console.log(intPart);
console.log(powerResult);












let num1 = parseFloat(prompt("Enter first decimal number:"));
let num2 = parseFloat(prompt("Enter second decimal number:"));

let truncatedPower = Math.trunc(Math.pow(num1, 3));
let flooredNum = Math.floor(num2);
let minimum = Math.min(truncatedPower, flooredNum);
let maximum = Math.max(truncatedPower, flooredNum);

alert(
  "Truncated Power: " + truncatedPower +
  "\nFloored Number: " + flooredNum +
  "\nMinimum: " + minimum +
  "\nMaximum: " + maximum
);
