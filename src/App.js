import Blog from "./pages/Blog";
import ReadBoard from "./pages/ReadBoard";
import CreateBoard from "./pages/CreateBoard";
import Paging from "./pages/Paging";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Modal from "./pages/modal";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Component/router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ReadBoard" element={<ReadBoard />} />
        <Route path="/CreateBoard" element={<CreateBoard />} />
        <Route path="/Paging" element={<Paging />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
