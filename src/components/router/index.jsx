import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../../pages/Mainpage/Mainpage";
import Login from "../../pages/Login/Login";
import Sign from "../../pages/Sign/Sign";

import NotFound from "../../pages/Notfound";

import Blog from "../../pages/Blog/Blog";
import ReadBoard from "../../pages/ReadBoard";
import CreateBoard from "../../pages/CreateBoard";
import Paging from "../../pages/Paging";
import Project from "../Project/Project";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/createboard" element={<CreateBoard />} />
      <Route path="/createboard/:id" element={<CreateBoard />} />
      <Route path="/paging" element={<Paging />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/project" element={<Project />} />
      <Route path="/readboard/:id" element={<ReadBoard />} />
    </Routes>
  );
};

export default Routers;
