

// 테스트용

import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  width: 1920px;
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-family: 'Inter', sans-serif;
  font-size: 23px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 64px;
  height: 73px;
`;

const LogoText = styled.span`
  font-weight: bold;
  margin-left: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 137.32px;
  height: 52px;
  padding: 12px 33px;
  border-radius: 20px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 4px 4px 5px 0px #00000040;
  background-color: white;
  border: none;
  cursor: pointer;
  outline: none;
`;

const LoginText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 23px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoImage src="logo.png" alt="Logo" />
        <LogoText>PAGE</LogoText>
      </LogoContainer>
      <ButtonContainer>
        <Button>Team</Button>
        <Button>Project</Button>
        <Button>Member</Button>
        <Button>
          Blog
          <LoginText>Log in</LoginText>
        </Button>
      </ButtonContainer>
    </NavbarContainer>
  );
};



export default Navbar;
