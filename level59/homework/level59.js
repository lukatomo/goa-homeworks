console.log(String(123));        // "123"
console.log(String(true));       // "true"
console.log(Number("456"));      // 456
console.log(Number(false));      // 0
console.log(Number("hello"));    // NaN

// 1. Empty object
let person = {};

// 2. Add properties
person.name = "Luka";
person.age = 15;
person.city = "Batumi";

// 3. Log name property
console.log(person.name);

// 4. Add hobby property
person.hobby = "Gaming";

// 5. Change city value
person.city = "Tbilisi";

// 6. Bonus: Print full updated object
console.log(person);

let student = {
  name: "Anna",
  info: {
    age: 17,
    school: "Green High School",
    grade: "11th"
  }
};

// Access and log school
console.log(student.info.school);

// Change grade
student.info.grade = "12th";

// Add club inside info
student.info.club = "Drama";

// Bonus: print final object
console.log(student);

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

if (num1 > 10 && num2 > 10) {
  alert("Both numbers are greater than 10.");
} else {
  alert("At least one number is 10 or less.");
}

let age = Number(prompt("Enter your age:"));
let city = prompt("Enter your city:");

// NOT under 18 means age >= 18
if ((age > 18 || city === "Tbilisi") && !(age < 18)) {
  alert("You meet the requirements.");
} else {
  alert("You do not meet the requirements.");
}
