// 1. apiLink

// რა არის:
// apiLink ჩვეულებრივ ნიშნავს API-ს მისამართს (URL-ს), საიდანაც მონაცემებს იღებ.

// დანიშნულება:
// გამოიყენება იმისთვის, რომ სერვერიდან ინფორმაცია წამოიღო (მაგ: ამინდი, მომხმარებლები, ფილმები და ა.შ.)

// მაგალითი:
//const apiLink = "https://jsonplaceholder.typicode.com/users";
//აქედან შეგვიძლია მონაცემების წამოღება fetch-ით.

// 2. import

// რა არის:
// import არის კოდის შემოტანა სხვა ფაილიდან.

// დანიშნულება:
// გეხმარება, რომ ერთი ფაილში დაწერილი ფუნქცია, ცვლადი ან კომპონენტი გამოიყენო სხვა ფაილში.

// მაგალითი:
// import Header from "./Header";

// აქ Header კომპონენტს ვიღებთ სხვა ფაილიდან.

// 3. export
// რა არის:
// export ნიშნავს კოდის გაზიარებას (გატანას) სხვა ფაილებისთვის.

// დანიშნულება:
// იმისთვის გამოიყენება, რომ სხვა ფაილებმა შეძლონ შენი კოდის გამოყენება.

// მაგალითი:

// export default function Header() {
//   return <h1>Hello</h1>;
// }

// 1. Default export + import

// 👉 ერთი მთავარი ელემენტის გატანა

// 📄 math.js
// export default function sum(a, b) {
//   return a + b;
// }
// 📄 app.js
// import sum from "./math.js";

// console.log(sum(2, 3)); // 5
// ✅ 2. Named export + import

// 👉 რამდენიმე რამის გატანა ერთ ფაილიდან

// 📄 math.js
// export const sum = (a, b) => a + b;
// export const multiply = (a, b) => a * b;
// 📄 app.js
// import { sum, multiply } from "./math.js";

// console.log(sum(2, 3));
// console.log(multiply(2, 3));
// ✅ 3. Rename (alias) import

// 👉 სახელის შეცვლა

// import { sum as add } from "./math.js";

// console.log(add(5, 5));
// ✅ 4. Import ყველაფერი ( * )

// 👉 მთლიანი ფაილის შემოტანა ობიექტად

// import * as math from "./math.js";

// console.log(math.sum(2, 3));
// console.log(math.multiply(2, 3));
// ✅ 5. Default + Named ერთად

// 👉 ერთ ფაილში ორივე

// 📄 math.js
// export default function sum(a, b) {
//   return a + b;
// }

// export const multiply = (a, b) => a * b;
// 📄 app.js
// import sum, { multiply } from "./math.js";

// console.log(sum(1, 2));
// console.log(multiply(3, 4));
// ✅ 6. React კომპონენტის მაგალითი
// 📄 Header.js
// export default function Header() {
//   return <h1>Hello</h1>;
// }
// 📄 App.js
// import Header from "./Header";

// function App() {
//   return <Header />;
// }