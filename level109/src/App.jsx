// //დავალება 2
// import Component1 from "./Component1";
// import Component2 from "./Component2";
// import Component3 from "./Component3";

// function App() {
//   return (
//     <>
//     <Component1 />
//     <Component2 />
//     <Component3 />
//     </>
//   );
// }

// export default App;









// // დავალება 4

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(1);

//   return (
//     <div>
//       <h1>{count}</h1>

//       <button onClick={() => setCount(count + 5)}>
//         +5
//       </button>

//       <button onClick={() => setCount(count - 1)}>
//         -1
//       </button>
//     </div>
//   );
// }
// export default App; 
















//საშინაო დავალება
export default function App() {
  return (
      <div className="bg-white w-[250px] h-[475px] rounded-2xl p-4 shadow-lg">
        <img
          src="/qr code.png"
          alt="QR Code"
          className="rounded-xl w-full"
        />

        <h1 className="text-slate-900 font-bold text-[22px] text-center mt-6">
          Improve your front-end skills by building projects
        </h1>

        <p className="text-slate-500 text-center mt-4 mb-6">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
  );
};