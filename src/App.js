import Blog from "./Blog";
import ReadBoard from "./ReadBoard";
import CreateBoard from "./CreateBoard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./Styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ReadBoard" element={<ReadBoard />} />
        <Route path="/CreateBoard" element={<CreateBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
