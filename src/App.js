import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Routers from "./Component/router";


function App() {
  return (
    <BrowserRouter>
        <Routers />
    </BrowserRouter>
  );
}

export default App;
