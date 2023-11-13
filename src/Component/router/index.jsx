import { Routes, Route } from "react-router-dom";
import Main from "../../pages/Mainpage/Mainpage";
import Login from "../../pages/Login/Login";
import Sign from "../../pages/Sign/Sign";

import NotFound from "../../pages/Notfound";

import Blog from "../../pages/Blog/Blog";
import ReadBoard from "../../pages/ReadBoard";
import CreateBoard from "../../pages/CreateBoard";
import Paging from "../../pages/Paging";
// import Modal from "./pages/modal";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/CreateBoard" element={<CreateBoard />} />
      <Route path="/CreateBoard/:id" element={<CreateBoard />} />
      <Route path="/Paging" element={<Paging />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Sign" element={<Sign />} />
      <Route path="/ReadBoard/:id" element={<ReadBoard />} />
    </Routes>
  );
};

export default Routers;
