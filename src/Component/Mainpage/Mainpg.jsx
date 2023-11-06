import Navbar from "../navbar";
import React from 'react';
import Home from "../imgslider/imgslider"
import Team from "../Team/Teampg"
import Project from "../Project/pj"
import Member from "../Member/mb"
import Announcement from "../Announcement/an"

const Mainpg = () => {
  return (
    <body>
    <div>
      <Navbar />
      <Home />
      <Team />
      <Project />
      <Member />
      <Announcement />
    </div>
    </body>
  );
};

export default Mainpg;