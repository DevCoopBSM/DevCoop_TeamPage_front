// main.jsx
import React from 'react';
import * as M from "./Mainpage/style";
import { Link } from 'react-router-dom';
import logo from "../image/Logo.png"; 

const Mainpg = () => {
  return (
    <body>
      {/* navbar */}
      <M.NavbarContainer>
        <M.LogoContainer>
          <M.LogoImage src={logo} alt="Logo" /> {/* src 속성값을 import한 logo로 변경 */}
          <M.LogoText>DevCoop</M.LogoText>
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
