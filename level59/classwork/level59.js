let number = Number(prompt("შეიყვანე რიცხვი:"));

if (number % 2 === 0) {
  console.log("ეს რიცხვი ლუწია.");
} else {
  console.log("ეს რიცხვი კენტია.");
}

// 1. ვქმნით ობიექტს სახელად person
let person = {
  name: {
    first: "Luka",
    middle: "Giorgi",
    last: "Tomoshevski"
  },
  age: {
    current: 15,
    birthYear: 2009,
    schoolGrade: 9
  }
};

// 2. ვცვლით მნიშვნელობას (მაგ. სახელი -> ახალი სახელი)
person.name.first = "Nika";

// 3. ვამატებთ ახალ key/value-ს name ობიექტში
person.name.nickname = "Kitt";

// 4. ვბეჭდავთ მთელ ობიექტს კონსოლში
console.log(person);

