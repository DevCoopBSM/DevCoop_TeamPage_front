// style.js
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 98%;
  height: 100px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 64.344px;
  height: 73.292px;
  flex-shrink: 0;
  background: #fff;
`;

export const LogoText = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-left: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  color: #000;
  font-family: Inter;
  font-size: 23px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const LoginButton = styled.button`
  display: flex;
  width: 137.322px;
  padding: 12px 33px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.25);
  border: none;
`;

export const LoginText = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 23px;
  font-style: normal;
  font-weight: 300;
  text-decoration: none;
`;

// navbar ended