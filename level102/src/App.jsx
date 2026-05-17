import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow((s)=> !s)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <p>Hello World</p>}
    </div>
  );
}

export default App;






import { useState } from "react";

function light() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style= {{textAlign: "center", marginTop: "50px"}}>
    <div style={{width: "150px", height: "150px",
       margin: "20px auto",borderRadius: "50%",
       backgroundColor: isOn ? "yellow" : "gray", }}></div>

        <button onClick={togglelight}> 
          {isOn ? "Turn Off" : "Turn On"}
          </button>
    </div>
  );
}

export default Light;