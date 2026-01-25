// 2) Traverse an array and print each element on a new line
let arr = [1, 2, 3, 4, 5];
arr.forEach(el => console.log(el));


// 3) Traverse an array and print the index along with its element
arr.forEach((el, index) => {
  console.log(index + ": " + el);
});


// 4) Traverse an array and print only the even numbers
arr.forEach(el => {
  if (el % 2 === 0) {
    console.log(el);
  }
});


// 5) Traverse an array and print only the odd numbers
arr.forEach(el => {
  if (el % 2 !== 0) {
    console.log(el);
  }
});


// 6) Traverse an array and calculate the sum of all elements
let sum = 0;
arr.forEach(el => {
  sum += el;
});
console.log(sum);


// 7) Select all <p> elements and print their text content
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(p => {
  console.log(p.textContent);
});


// 8) Select all <h1> elements and change their text color to blue
let h1s = document.querySelectorAll("h1");
h1s.forEach(h1 => {
  h1.style.color = "blue";
});


// 9) Select all <li> elements and print their inner text
let listItems = document.querySelectorAll("li");
listItems.forEach(li => {
  console.log(li.innerText);
});


// 10) Select all <a> elements and print their href attributes
let links = document.querySelectorAll("a");
links.forEach(a => {
  console.log(a.href);
});


// 11) Select all <img> elements and change their alt text to "Image"
let images = document.querySelectorAll("img");
images.forEach(img => {
  img.alt = "Image";
});


// 12) Select all elements with class "item" and print their text content
let items = document.querySelectorAll(".item");
items.forEach(item => {
  console.log(item.textContent);
});


// 13) Select all elements with class "highlight" and change background color to yellow
let highlights = document.querySelectorAll(".highlight");
highlights.forEach(el => {
  el.style.backgroundColor = "yellow";
});


// 14) Select all elements with class "title" and make text bold
let titles = document.querySelectorAll(".title");
titles.forEach(title => {
  title.style.fontWeight = "bold";
});


// 15) Select all elements with class "hidden" and hide them
let hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(el => {
  el.style.display = "none";
});


// 16) Select all elements with class "card" and add a border
let cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.style.border = "2px solid black";
});
