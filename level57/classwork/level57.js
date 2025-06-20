// ობიექტის შექმნა
let person = {
  name: "Luka",
  surname: "Tomoshevski",
  academy: "GOA",
  num: 15,
  favColor: "blue",
  isGoaStudent: true,

  // მეთოდი greet
  greet: function() {
    console.log("hello");
  }
};

// მთელი ობიექტის დაბეჭდვა
console.log(person);

// ერთი კუთვნილების დაბეჭდვა (მაგ: სახელი)
console.log(person.name);

// greet მეთოდის გამოძახება
person.greet();







//and-ის მაგალითები
console.log(true && true);     // true
console.log(true && false);    // false
console.log(false && true);    // false
console.log(false && false);   // false


//or-ის  მაგალითები
console.log(true || true);     // true
console.log(true || false);    // true
console.log(false || true);    // true
console.log(false || false);   // false









// ობიექტის შექმნა
const myObj = {
  name: "ლუკა",
  age: 13,
  city: "თბილისი",

  // მეთოდი 1
  showName: function() {
    console.log("სახელია:", this.name);
  },

  // მეთოდი 2
  showAge: function() {
    console.log("ასაკია:", this.age);
  },

  // მეთოდი 3
  showCity: function() {
    console.log("ქალაქია:", this.city);
  }
};

// მეთოდების გამოძახება
myObj.showName();
myObj.showAge();
myObj.showCity();
