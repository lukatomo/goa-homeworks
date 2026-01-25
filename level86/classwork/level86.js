console.log("===== 1. მასივი და დესტრუქცია =====");

let myArray = [
    "Luka", 
    "Tomoshevski", 
    7, 
    "Blue", 
    true, 
    ["Inception", "Interstellar", "Titanic"]
];

// დესტრუქცია
let [firstName, lastName, favNumber, favColor, learningGo, favMovies] = myArray;

// დაბეჭდვა
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Favorite Number:", favNumber);
console.log("Favorite Color:", favColor);
console.log("Learning Go:", learningGo);
console.log("Favorite Movies:", favMovies);

console.log("\n===== 2. ობიექტი პირადი ინფორმაციით =====");

let myObject = {
    name: "Luka",
    surname: "Tomoshevski",
    academy: "Go Academy",
    favColor: "Blue",
    favNumber: 7
};

// გასაღებების არსებობის შემოწმება
let keysToCheck = ["name", "myName", "mySurname", "worstColor", "favColor", "favnumber", "favNumber"];

keysToCheck.forEach(key => {
    console.log(`Key "${key}" exists?`, key in myObject);
});

console.log("\n===== 3. ობიექტი 10 წყვილით =====");

let tenPairsObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5",
    key6: "value6",
    key7: "value7",
    key8: "value8",
    key9: "value9",
    key10: "value10"
};

// ყველა გასაღების და მნიშვნელობის მიღება
let allKeys = Object.keys(tenPairsObject);
let allValues = Object.values(tenPairsObject);

console.log("All Keys:", allKeys);
console.log("All Values:", allValues);
