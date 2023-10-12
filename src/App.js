import Login from "./Login";
import Sign from "./Sign";
import Project from "./Project";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import Routers from "./Component/router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign" element={<Sign/>} />
        <Route path="/Project"element={<Project/>} />
      </Routes>
      <Routers />
    </BrowserRouter>

  );
}


export default App;
