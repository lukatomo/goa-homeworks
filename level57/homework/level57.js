// 2) Create an empty object
let emptyObj = {};

// 3) Create an object with your name, age, and city
let person = {
  name: "Luka",
  age: 15,
  city: "Tbilisi"
};

// 4) Access the value of a property in an object
console.log(person.name); // Output: Luka

// 5) Add a new property to an existing object
person.hobby = "coding";
console.log(person); // Now includes hobby

// 6) Create a nested object (an object inside another object)
let student = {
  name: "Luka",
  school: {
    name: "Tech Academy",
    grade: "10th"
  }
};
console.log(student.school.name); // Output: Tech Academy

// 7) Change the value of an existing property in an object
person.age = 16;
console.log(person.age); // Output: 16
// 8) Check if two numbers are both greater than 10
let a = 15;
let b = 12;
console.log(a > 10 && b > 10); // true

// 9) Check if at least one of two conditions is true
let x = 5;
let y = 20;
console.log(x > 10 || y > 10); // true

// 10) Use the NOT operator to invert a boolean value
let isActive = true;
console.log(!isActive); // false

// 11) Combine multiple logical operations in a single expression
let num1 = 8;
let num2 = 15;
let result = (num1 < 10 && num2 > 10) || !(num1 === num2);
console.log(result); // true
