import Project from "./Project";
import "./App.css";
import Blog from "./pages/Blog";
import ReadBoard from "./pages/ReadBoard";
import CreateBoard from "./pages/CreateBoard";
import Paging from "./pages/Paging";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login/Loginpage";
import Sign from "./Component/Sign/Signpage";
import Mainpage from "./Component/Mainpage/Mainpg";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign" element={<Sign/>} />
        <Route path="/Project"element={<Project/>} />
        <Route path="/" element={<Mainpage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ReadBoard" element={<ReadBoard />} />
        <Route path="/CreateBoard" element={<CreateBoard />} />
        <Route path="/Paging" element={<Paging />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
