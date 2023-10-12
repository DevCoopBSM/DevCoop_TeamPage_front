import ReadBoard from "./pages/ReadBoard";
import CreateBoard from "./pages/CreateBoard";
import Paging from "./pages/Paging";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login/Loginpage";
import Sign from "./Component/Sign/Signpage";
import "./App.css";
import Routers from "./Component/router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ReadBoard" element={<ReadBoard />} />
        <Route path="/CreateBoard" element={<CreateBoard />} />
        <Route path="/Paging" element={<Paging />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign" element={<Sign />} />
      </Routes>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
