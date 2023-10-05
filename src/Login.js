import './App.css';
import chick from "./DevCoopL.svg"
import { Link } from "react-router-dom";
import axios from 'axios';

import React, { useState } from 'react'; // useState를 import

function Login() {
  // 이메일과 비밀번호를 위한 상태 변수 정의
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // 상태 변수로부터 이메일과 비밀번호를 가져와 서버에 전송
      const response = await axios.post('/api/login', {
        email: email,
        password: password,
      });
      const { acc_token, ref_token } = response.data;

      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem('accessToken', acc_token);
      localStorage.setItem('refreshToken', ref_token);
  

      
    } catch (error) {
      // ... (이하 생략)
    }
  };

  return (
    <div className="login-wrapper">
      <img id="chicken" src={chick} alt="chicken image"></img>
      <p id="log-text">
        <h2 id="loxt">DevCoop</h2>
      </p>
      <div id="eeeee">
        {/* 상태 변수를 이용한 입력란 */}
        <input
          className="email"
          type="text"
          name="userName"
          placeholder="    이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // 이메일 변경 핸들러
        /><br />
        <input
          id="pw"
          name="userPassword"
          placeholder="    비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // 비밀번호 변경 핸들러
        /><br /><br />
      </div>
      <div id="lolo">
        <input
          type="submit"
          id="login"
          value="로그인"
          onClick={handleLogin}
        />
      </div>
      <text>만약 계정이 없다면? <Link to="/Sign">회원가입하기</Link></text>
    </div>
  );
}

export default Login;

