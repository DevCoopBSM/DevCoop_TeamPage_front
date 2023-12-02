import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginWrapper = styled.div`
  display: flex;
  outline: auto;
  width: 600px;
  height: 500px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  outline-color: white;
  box-shadow: 5px 5px 5px 5px gray;
  font-family: 'Inter', sans-serif;
`;

export const Input = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 2px 2px gray;
  border-color: white;
`;

export const Body = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13% 0 0 0;
`;

export const H2 = styled.h2`
  text-align: center;
`;

export const LoginButton = styled(Input)`
  background-color: #ffe766;
  color: white;
  font-size: 20px;
  text-shadow: 2px 2px 2px gray;
`;

export const ChickenImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const StyledLink = styled(Link)`
  color: #ffe766;
  text-decoration-line: none;
`;
