// import { useState } from "react";

// function App() {
//   const [info, setInfo] = useState({
//     username: "",
//   });
//     function handleChange(e) {
//       setInfo({...info,
//           [e.target.name]: e.target.value,
//       });
//     }
    
//     return(
//       <div>
//         <input type="text"
//         placeholder="Enter username"
//         value={info.username}
//         onChange={handleChange}
//         />

//         <h1>{info.username}</h1>
//       </div>
//     );

// }


// export default App





import { useState,useEffect } from "react";

function App() {
  const [title, setTitle] = useState("")

  useEffect(() => {
    document.title = title;
  }, [title]

  return (
    <div>
      <input type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />

      <h1>{title}</h1>
    </div>
  );
}

export default App;