// ✅ 1. studentsArr მასივი (პარაგრაფებით)
const studentsArr = [
  <p>გიორგი</p>,
  <p>ანა</p>,
  <p>ლუკა</p>,
  <p>ნიკა</p>
];

// 👉 აქ თითოეული ელემენტი არის <p> თეგი, სადაც წერია მოსწავლის სახელი.

// ✅ 2. mySection (მრავალხაზიანი JSX)
const mySection = (
  <section>
    <h2>ჩვენი სექცია</h2>
    <p>ეს არის პარაგრაფი</p>
    <img src="https://via.placeholder.com/150" alt="image" />
  </section>
);

// 👉 შეიცავს:

// h2
// p
// img
// ✅ 3. JSX (container + self-closing + className + {})
const name = "ლუკა";

const content = (
  <div className="container">
    <h1>{name}</h1>
    <p>ეს არის ტექსტი</p>
    <img src="https://via.placeholder.com/100" alt="img" />
    <br />
  </div>
);

// 👉 აქ გვაქვს:

//  container tag → <div>
//   self-closing tags → <img />, <br />
// className → container
// {} გამოყენება → {name}