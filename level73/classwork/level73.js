let text = "";

do {
  text += "Luka";
} while (text.length < 20);

console.log(text);







let numbers = [];
let i = 0;

do {
  numbers.push(i + 1); 
  i++;
} while (i < 5);

for (const num of numbers) {
  console.log(num);
}








const student = {
  name: "luka",
  age: 13,
  grade: "8th"
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}






for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 7 === 0) {
    continue;
  }
  console.log(i);
}
