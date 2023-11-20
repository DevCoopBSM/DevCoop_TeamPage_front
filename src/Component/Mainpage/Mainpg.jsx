import Navbar from "../navbar";
import React from 'react';
import Home from "../imgslider/imgslider"
import Team from "../Team/Teampg"
import Project from "../Project/pj"
import Member from "../Member/mb"

const Mainpg = () => {
  return (
    <body>
    <div>
      <Navbar />
      <Home />
      <Team />
      <Project />
      <Member />
    </div>
    </body>
  );
};

export default Mainpg;