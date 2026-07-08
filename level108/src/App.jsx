// import styles from "./App.module.css";

// function App() {
//   return (
//     <div>
//       <h1 className={styles.title}>სათაური</h1>

//       <p className={styles.text}>ეს არის ტექსტი</p>

//       <div className={styles.box}>ე არის ბლოკი</div>
//     </div>
//   );
// }

// export default App;







import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      name="name"
      placeholder="name"
      onChange={handleChange}
      />

      <input
      type="email"
      name="email"
      placeholder="email"
      onChange={handleChange}
      />

     <input
      type="age"
      name="age"
      placeholder="age"
      onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;