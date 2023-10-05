import Blog from "./pages/Blog";
import ReadBoard from "./pages/ReadBoard";
import CreateBoard from "./pages/CreateBoard";
import Paging from "./pages/Paging";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./Styles/App.css";
import Modal from "./pages/modal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ReadBoard" element={<ReadBoard />} />
        <Route path="/CreateBoard" element={<CreateBoard />} />
        <Route path="/Paging" element={<Paging />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
