const languages = [
  "JavaScript",
  "Python",
  "Java",
  "C",
  "Cplusplus",
  "TypeScript",
  "Swift"
  
];

const index = languages.findIndex(lang => lang.length > 8);

console.log(index);
console.log(languages[index]);



const firstBefore2000 = technologies.find(item => item.releaseYear < 2000);

console.log(firstBefore2000);

//ბოლო ელემენტი, რომლის usedInWebDev = true
const lastUsedInWeb = technologies.findLast(item => item.usedInWebDev === true);

console.log(lastUsedInWeb);



//მასივის შექმნა
const numbers = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];

//1. იპოვეთ 1-ის ინდექსი (indexOf)
const firstIndexOf1 = numbers.indexOf(1);
console.log(firstIndexOf1); 


 შედეგი: 0

//2. იპოვეთ 1-ის ინდექსი (lastIndexOf)
const lastIndexOf1 = numbers.lastIndexOf(1);
console.log(lastIndexOf1);


 შედეგი: 9

//3. იპოვეთ 5-ის ინდექსი (indexOf)
const firstIndexOf5 = numbers.indexOf(5);
console.log(firstIndexOf5);


 შედეგი: 4

//4. იპოვეთ 5-ის ინდექსი (lastIndexOf)
const lastIndexOf5 = numbers.lastIndexOf(5);
console.log(lastIndexOf5);


 შედეგი: 5