import Login from "./Login";
import Sign from "./Sign";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign" element={<Sign/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;