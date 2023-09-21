// main.jsx
import React from 'react';
import * as M from "./Mainpage/style";
import { Link } from 'react-router-dom';

const Mainpg = () => {
  return (
    <body>
      {/* navbar */}
      <M.NavbarContainer>
        <M.LogoContainer>
          <M.LogoImage src="logo.png" alt="Logo" />
          <M.LogoText>DEVCOOP</M.LogoText>
        </M.LogoContainer>
        <M.ButtonContainer>
          <Link to="/team"><M.Button>Team</M.Button></Link>
          <Link to="/project"><M.Button>Project</M.Button></Link>
          <Link to="/member"><M.Button>Member</M.Button></Link>
          <Link to="/blog"><M.Button>Blog</M.Button></Link>
          <Link to="/login">
            <M.LoginButton>
              <M.LoginText>Log in</M.LoginText>
            </M.LoginButton>
          </Link>
        </M.ButtonContainer>
      </M.NavbarContainer>
    </body>
  );
};

export default Mainpg;
