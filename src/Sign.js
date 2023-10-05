import './App.css';
import chick from "./DevCoopL.svg"
import { Link } from "react-router-dom";

function Sign() {
  return (
    <div className="login-wrapper">
      <img id="chicken" src={chick} alt="chicken image"></img>
      <p id="log-text">
        <h2 id="loxt">DevCoop</h2>
      </p>
      <form method="post" id="Login-form">
        <p id="signup-wrapper">
          <input id="mkem" type="text" name="userName" placeholder="    이메일" /><br />
          <input id="mkpw"type="password" name="userPassword" placeholder="    비밀번호" /><br />
          <input id="ckpw" type="password check" name="userPasswordcheck" placeholder="    비밀번호 확인" /><br /><br />
          <input type="submit" id="sup" value="회원가입" /><br></br>
        </p>
      </form>
      <div id="return"><text>이미 계정이 있다면? <Link to="/Login">로그인</Link></text></div>
      
    </div>
  );
}

export default Sign;