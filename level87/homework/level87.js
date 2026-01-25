console.log("===== 1. Person Class =====");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello! My name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person("Luka", 17);
person1.greet();
console.log(person1);

console.log("\n===== 2. Car Class =====");

class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    printBrand() {
        console.log(`Car brand: ${this.brand}`);
    }
}

let car1 = new Car("Toyota", 2020);
let car2 = new Car("BMW", 2022);
car1.printBrand();
car2.printBrand();
console.log(car1, car2);

console.log("\n===== 3. Animal Class =====");

class Animal {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Animal type: ${this.type}`);
    }
}

let animal1 = new Animal("Dog");
let animal2 = new Animal("Cat");
animal1.printType();
animal2.printType();

console.log("\n===== 4. Student Class =====");

class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    printGrade() {
        console.log(`${this.name}'s grade: ${this.grade}`);
    }
}

let student1 = new Student("Nino", "A");
let student2 = new Student("Giorgi", "B");
let student3 = new Student("Sofia", "A+");
student1.printGrade();
student2.printGrade();
student3.printGrade();

console.log("\n===== 5. Book Class =====");

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    printTitle() {
        console.log(`Book title: ${this.title}`);
    }
}

let book1 = new Book("Inception", "Christopher Nolan");
let book2 = new Book("Interstellar", "Christopher Nolan");
book1.printTitle();
book2.printTitle();

console.log("\n===== 6. Phone Class =====");

class Phone {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    checkPrice() {
        if (this.price > 1000) {
            console.log(`${this.model} is expensive.`);
        } else {
            console.log(`${this.model} is cheap.`);
        }
    }
}

let phone1 = new Phone("iPhone 14", 1200);
let phone2 = new Phone("Samsung Galaxy A32", 350);
phone1.checkPrice();
phone2.checkPrice();
