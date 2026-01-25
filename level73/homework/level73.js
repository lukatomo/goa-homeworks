// 2) Print numbers from 1 to 10
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);


// 3) Print numbers from 10 down to 1
let j = 10;
do {
  console.log(j);
  j--;
} while (j >= 1);


// 4) Print all even numbers between 2 and 20
let k = 2;
do {
  console.log(k);
  k += 2;
} while (k <= 20);


// 5) Keep printing numbers until the sum reaches at least 100
let num = 1;
let sum = 0;
do {
  console.log(num);
  sum += num;
  num++;
} while (sum < 100);


// 6) Multiplication table of 5 (5×1 to 5×10)
let m = 1;
do {
  console.log("5 x " + m + " = " + (5 * m));
  m++;
} while (m <= 10);
// 7) Object keys using for...in
let person = {
  name: "Luka",
  age: 16,
  city: "Tbilisi"
};

for (let key in person) {
  console.log(key);
}


// 8) Object values using for...in
let book = {
  title: "Book Title",
  author: "Author Name",
  year: 2024
};

for (let key in book) {
  console.log(book[key]);
}


// 9) Print keys and values of student object
let student = {
  name: "Giorgi",
  age: 17,
  grade: 11
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}


// 10) Count number of properties in an object
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};

let count = 0;
for (let key in obj) {
  count++;
}
console.log(count);


// 11) Copy properties into another object
let original = {
  x: 10,
  y: 20,
  z: 30
};

let copy = {};
for (let key in original) {
  copy[key] = original[key];
}
console.log(copy);


// 12) Print each element in an array (for...of)
let numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num);
}


// 13) Print each character of a string
let text = "HELLO";
for (let char of text) {
  console.log(char);
}


// 14) Print each fruit name
let fruits = ["Apple", "Banana", "Orange"];
for (let fruit of fruits) {
  console.log(fruit);
}


// 15) Calculate sum of array numbers
let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log(sum);


// 16) Find the largest number in an array
let max = numbers[0];
for (let num of numbers) {
  if (num > max) {
    max = num;
  }
}
console.log(max);
// 17) Print numbers from 1 to 10, stop when number is 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}


// 18) While loop, break when sum exceeds 50
let i = 1;
let sum = 0;

while (true) {
  sum += i;
  console.log(i);
  if (sum > 50) {
    break;
  }
  i++;
}


// 19) Find first negative number in array
let numbers = [4, 8, -3, 6, -1];

for (let num of numbers) {
  if (num < 0) {
    console.log(num);
    break;
  }
}


// 20) Print names, break if "John" appears
let names = ["Anna", "Mark", "John", "Luka"];

for (let name of names) {
  if (name === "John") {
    break;
  }
  console.log(name);
}


// 21) Stop at first number divisible by both 7 and 11
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0 && i % 11 === 0) {
    console.log(i);
    break;
  }
}


// 22) Print numbers 1–10, skip 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}


// 23) Print even numbers 1–20, skip odds
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}


// 24) Print only positive numbers
let nums = [-5, 3, -1, 7, 0, 4];

for (let num of nums) {
  if (num < 0) {
    continue;
  }
  console.log(num);
}


// 25) Print characters, skip spaces
let text = "Hello World";

for (let char of text) {
  if (char === " ") {
    continue;
  }
  console.log(char);
}


// 26) Print 1–50, skip multiples of 3
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
