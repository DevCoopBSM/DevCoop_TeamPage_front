import React from "react";
import * as S from "./style";
import chick from "../../assets/DevCoopL.svg";
import Sign from "../Sign/Signpage.jsx";

function Login() {
  
  return (
    <S.Body>
      <S.LoginWrapper>
        <S.ChickenImage src={chick} alt="chicken image" />
        <S.H2>Dev Coop</S.H2>
        <form method="post" id="Login-form">
          <S.Input type="text" name="userName" placeholder="이메일" />
          <br />
          <S.Input type="password" name="userPassword" placeholder="비밀번호" />
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
