import Login from "./Login";
import Sign from "./Sign";
import Project from "./Project";
import Blog from "./pages/Blog";
import ReadBoard from "./pages/ReadBoard";
import CreateBoard from "./pages/CreateBoard";
import Paging from "./pages/Paging";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Routers from "./Component/router";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ReadBoard" element={<ReadBoard />} />
        <Route path="/CreateBoard" element={<CreateBoard />} />
        <Route path="/Paging" element={<Paging />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign" element={<Sign/>} />
        <Route path="/Project"element={<Project/>} />
        <Route path="/Sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;