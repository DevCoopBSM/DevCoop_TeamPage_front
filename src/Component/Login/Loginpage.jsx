import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import chick from "../../assets/DevCoopL.svg";
import axios from "axios";
import Navbar from "../navbar";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const Navigate = useNavigate();

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserPasswordChange = (event) => {
    setUserPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/login", {
        name: userName,
        pw: userPassword,
      });
      console.log(response.data); // 서버에서 전달된 토큰 출력
      // 로그인 성공 후 메인 페이지로 이동
      Navigate.push("/main");
    } catch (error) {
      console.error(error);
      // 로그인 실패 시 에러 처리
    }
  };

  return (
    <S.Body>
      <Navbar />
      <S.LoginWrapper>
        <S.ChickenImage src={chick} alt="chicken image" />
        <S.H2>Dev Coop</S.H2>
        <form onSubmit={handleLogin} id="Login-form">
          <S.Input
            type="text"
            name="userName"
            placeholder="이메일"
            value={userName}
            onChange={handleUserNameChange}
          />
          <br />
          <S.Input
            type="password"
            name="userPassword"
            placeholder="비밀번호"
            value={userPassword}
            onChange={handleUserPasswordChange}
          />
          <br />
          <br />
          <S.LoginButton type="submit" id="login" value="로그인" />
        </form>
        <text>
          만약 계정이 없다면?
          <S.StyledLink to="/Sign">회원가입하기</S.StyledLink>
        </text>
      </S.LoginWrapper>
    </S.Body>
  );
}

export default Login;
