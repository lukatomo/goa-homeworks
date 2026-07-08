import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import BMW from "./pages/BMW";
import Mercedes from "./pages/Mercedes"; 
import Audi from "./pages/Audi";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/BMW" element={<BMW />} />
        <Route path="/Mercedes" element={<Mercedes />} />
        <Route path="/Audi" element={<Audi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;