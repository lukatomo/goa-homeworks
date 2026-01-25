// =======================
// 1. შემთხვევითი ფილმი
let favoriteMovies = ["Inception", "Interstellar", "The Dark Knight", "Titanic", "Avatar"];
let randomIndex = Math.floor(Math.random() * favoriteMovies.length);
console.log("Random movie:", favoriteMovies[randomIndex]);

// =======================
// 2. დღევანდელი დღე, თვე, წელი
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1; // თვეები 0-დან იწყება
let year = today.getFullYear();
console.log(`დღე: ${day}, თვე: ${month}, წელი: ${year}`);

// =======================
// 3. ინტერვალი 1 წუთის განმავლობაში
let seconds = 0;
let intervalId = setInterval(() => {
    seconds++;
    console.log(`მერცხე წამი: ${seconds}`);
    
    if (seconds >= 60) {
        clearInterval(intervalId);
        console.log("Interval დასრულდა");
    }
}, 1000);
