// navbar 스타일입니다.
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 98%;
  height: 80px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 48px;
  height: 55px;
  flex-shrink: 0;
  background: #fff;

  position: fixed;
  left: 65px
`;

export const LogoText = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-left: 5px;

  position: fixed;
  left: 120px
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-right: 80px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const LoginButton = styled.button`
  display: flex;
  width: 120px;
  padding: 12px 33px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.25);
  border: none;
  margin-right: 80px;
`;

export const LoginText = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  text-decoration: none;
`;

// navbar ended