import React from 'react';
import * as M from "./style";

const Mainpg = () => {
  return (
    <>
    <M.NavbarContainer>
      <M.LogoContainer>
        <M.LogoImage src="logo.png" alt="Logo" />
        <M.LogoText>PAGE</M.LogoText>
      </M.LogoContainer>
      <M.ButtonContainer>
        <M.Button>Team</M.Button>
        <M.Button>Project</M.Button>
        <M.Button>Member</M.Button>
        <M.Button>Blog</M.Button>
        <M.Button>
          <M.LoginText>Log in</M.LoginText>
        </M.Button>
      </M.ButtonContainer>
    </M.NavbarContainer>
    </>
  );
};



export default Mainpg;
