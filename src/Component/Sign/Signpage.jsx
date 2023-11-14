import React from "react";
import * as S from "./style";
import chick from "../../assets/DevCoopL.svg";
import NavBar from "../navbar";

function Sign() {
  return (
    <S.Body>
    <NavBar />
    <S.LoginWrapper>
      <S.ChickenImage src={chick} alt="chicken image" />
      <S.H2>Dev Coop</S.H2>
      <form method="post" id="Login-form">
        <S.Input type="text" name="userName" placeholder="이메일" />
        <br />
        <S.Input type="password" name="userPassword" placeholder="비밀번호" />
        <br />
        <S.Input
          type="password check"
          name="userPasswordcheck"
          placeholder="비밀번호 확인"
        />
        <br />
        <br />
        <S.LoginButton type="submit" id="login" value="회원가입" />
        <br></br>
      </form>
      <S.Text>
        이미 계정이 있다면?<S.StyledLink to="/Login">로그인</S.StyledLink>
      </S.Text>
    </S.LoginWrapper>
    </S.Body>
  );
}

export default Sign;
