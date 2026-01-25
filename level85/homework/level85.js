console.log("===== 1-4: Random Numbers and Names =====");

// 1. Generate a random integer between 1 and 10
let random1to10 = Math.floor(Math.random() * 10) + 1;
console.log("Random integer 1-10:", random1to10);

// 2. Simulate a dice roll (1 to 6)
let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Dice roll (1-6):", diceRoll);

// 3. Random password length between 8 and 16
let passwordLength = Math.floor(Math.random() * (16 - 8 + 1)) + 8;
console.log("Random password length (8-16):", passwordLength);

// 4. Randomly select a name from an array
let names = ["Luka", "Nino", "Ani", "Giorgi", "Sofia"];
let randomName = names[Math.floor(Math.random() * names.length)];
console.log("Randomly selected name:", randomName);

console.log("\n===== 5-7: Current Date and Time =====");

// Current date and time
let now = new Date();
console.log("Current date and time:", now.toString());

// Display only the current year
console.log("Current year:", now.getFullYear());

// Show the current day of the week as a word
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayName = daysOfWeek[now.getDay()];
console.log("Today is:", dayName);
