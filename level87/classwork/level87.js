console.log("===== 1. Student Class =====");

// 1. კლასის შექმნა
class Student {
    constructor(name, surname, age, academy, group, favColor, favLanguage) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.academy = academy;
        this.group = group;
        this.favColor = favColor;
        this.favLanguage = favLanguage;
    }

    // მეთოდი, რომელიც დაბეჭდავს name + surname
    logName() {
        console.log(`Full Name: ${this.name} ${this.surname}`);
    }
}

// 2. ობიექტის შექმნა
let student1 = new Student("Luka", "Tomoshevski", 13, "Goal oriented Academy", "Group 29", "Blue", "python");

// 3. მეთოდის გამოძახება
student1.logName();

// 4. მთელი ობიექტის დაბეჭდვა
console.log("Student Object:", student1);

console.log("\n===== 2. ProgrammingLanguage Class =====");

// 1. კლასის შექმნა
class ProgrammingLanguage {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

// 2. ობიექტის შექმნა
let language1 = new ProgrammingLanguage("JavaScript", 1995);

// 3. ობიექტის დაბეჭდვა
console.log("ProgrammingLanguage Object:", language1);
