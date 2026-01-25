console.log("===== 2. Object.entries() to Array of Strings =====");

let prices = {
    apple: 1.5,
    banana: 0.75,
    orange: 2,
    mango: 3
};

// Object.entries() გამოიყენება ობიექტის key-value წყვილების ასაღებად
let entries = Object.entries(prices);

// კონვერტირება "item: $price" სტრინგებად
let priceStrings = entries.map(([item, price]) => `${item}: $${price}`);
console.log("Array of price strings:", priceStrings);

console.log("\n===== 3. Object.hasOwn() property check =====");

let person = {
    name: "Luka",
    age: 20,
    city: "Tbilisi",
    profession: "Student"
};

let propsToCheck = ["name", "age", "country", "city", "surname", "profession"];
let validPropsCount = propsToCheck.filter(prop => Object.hasOwn(person, prop)).length;

console.log("Number of valid own properties:", validPropsCount);

console.log("\n===== 4. Object.keys() usage =====");

let book = {
    title: "Inception",
    author: "Christopher Nolan",
    year: 2010,
    genre: "Sci-Fi",
    pages: 148
};

// ყველა გასაღების მიღება
let bookKeys = Object.keys(book);
console.log("Keys of the book object:", bookKeys);

// გასაღებების რაოდენობა
console.log("Number of keys:", bookKeys.length);

// კონკრეტული გასაღების არსებობა
let specificKey = "author";
console.log(`Does key "${specificKey}" exist?`, bookKeys.includes(specificKey));

console.log("\n===== 5. Object.values() for sum and max =====");

let scores = {
    math: 95,
    english: 88,
    physics: 76,
    chemistry: 90,
    history: 85
};

// ყველა მნიშვნელობის მიღება
let scoreValues = Object.values(scores);
console.log("Values array:", scoreValues);

// ჯამი
let totalScore = scoreValues.reduce((sum, val) => sum + val, 0);
console.log("Total score:", totalScore);

// მაქსიმალური მნიშვნელობა
let maxScore = Math.max(...scoreValues);
console.log("Maximum score:", maxScore);
