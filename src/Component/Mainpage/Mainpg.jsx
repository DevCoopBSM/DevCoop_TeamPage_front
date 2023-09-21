import Navbar from "../navbar";
import React from 'react';
import Home from "../imgslider/imgslider"
import Team from "../Team/Teampg"

const Mainpg = () => {
  return (
    <body>
    <div>
      <Navbar />
      <Home />
      <Team />
    </div>
    </body>
  );
};

export default Mainpg;