// 2) Counter from 1 to 5 every second, then stop
let count1 = 1;
let interval1 = setInterval(() => {
  console.log(count1);
  if (count1 === 5) {
    clearInterval(interval1);
  }
  count1++;
}, 1000);


// 3) Message every 2 seconds, stop after 10 seconds
let interval2 = setInterval(() => {
  console.log("Message every 2 seconds");
}, 2000);

setTimeout(() => {
  clearInterval(interval2);
}, 10000);


// 4) Change background color every 3 seconds, stop after 5 changes
let colors = ["red", "blue", "green", "yellow", "purple"];
let colorIndex = 0;

let interval3 = setInterval(() => {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex++;

  if (colorIndex === 5) {
    clearInterval(interval3);
  }
}, 3000);


// 5) Display current time every second, stop after 15 seconds
let interval4 = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(interval4);
}, 15000);


// 6) Timer that counts up to 10 seconds
let seconds = 0;
let timer = setInterval(() => {
  seconds++;
  console.log(seconds);

  if (seconds === 10) {
    clearInterval(timer);
  }
}, 1000);


// 7) Array of 4 numbers, log second element
let arr1 = [10, 20, 30, 40];
console.log(arr1[1]);


// 8) Change first element to 100 and log array
let arr2 = [5, 15, 25, 35];
arr2[0] = 100;
console.log(arr2);


// 9) Array of 3 strings, log each with indexing
let arr3 = ["apple", "banana", "orange"];
console.log(arr3[0]);
console.log(arr3[1]);
console.log(arr3[2]);


// 10) Array of 5 numbers, sum of first and last elements
let arr4 = [2, 4, 6, 8, 10];
let sum = arr4[0] + arr4[arr4.length - 1];
console.log(sum);
