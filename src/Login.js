import './App.css';
import chick from "./DevCoopL.svg"
import { Link } from "react-router-dom";
import axios from 'axios';
import {useAuth} from "./hooks/useAuth"

import React, { useState } from 'react'; // useState를 import

function Login() {
  // 이메일과 비밀번호를 위한 상태 변수 정의
  const {
    email,
    password,
    handleInputId,
    handleInputPw,
    handleSubmit,
  } = useAuth();
  return (
    <div className="login-wrapper">
      <img id="chicken" src={chick} alt="chicken image"></img>
      <div id="log-text">
        <h2 id="loxt">DevCoop</h2>
      </div>
      <form id="eeeee" onSubmit={handleSubmit}>
        {/* 상태 변수를 이용한 입력란 */}
        <input
          className="email"
          type="text"
          name="name"
          placeholder="    이메일"
          value={email} // 이메일 변경 핸들러
          onChange={handleInputId}
        /><br />
        <input
          id="pw"
          name="pw"
          placeholder="    비밀번호"
          type="password"
          value={password}// 비밀번호 변경 핸들러
          onChange={handleInputPw}
        /><br /><br />
        <div id="lolo">
          <button>로그인</button>
      </div>
      </form>
      <p>만약 계정이 없다면? <Link to="/Sign">회원가입하기</Link></p>
    </div>
  );
}

export default Login;

