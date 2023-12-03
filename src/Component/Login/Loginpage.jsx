import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import chick from '../../assets/DevCoopL.svg';
import Navbar from '../navbar';
import { axiosInstance } from '../../axios';

function Login() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
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
      // const response = await axiosInstance(userName, userPassword);  // 'login' 함수 호출
      const response = await axiosInstance.post('/login', {
        pw: userPassword,
        name: userName,
      }); // 'login' 함수 호출
      if (response.status === 200) {
        console.log(response.data); // 서버에서 받아온 JSON Object 출력
        console.log(response.data.acc_token); // 서버에서 받아온 accessToken 출력
        console.log(response.data.ref_token); // 서버에서 받아온 refreshToken 출력
        Navigate('/main'); // 로그인 성공 후 메인 페이지로 이동
      } else {
        alert(`로그인 오류 ${response.data.message}`);
      }
    } catch (error) {
      console.error(error);
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
            placeholder="이름"
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
        <p>
          만약 계정이 없다면?
          <S.StyledLink to="/Sign">회원가입하기</S.StyledLink>
        </p>
      </S.LoginWrapper>
    </S.Body>
  );
}

export default Login;
