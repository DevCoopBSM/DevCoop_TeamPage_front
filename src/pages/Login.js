import "../Styles/Login.css";
import chick from "../assets/DevCoopL.svg";
import Sign from "../pages/Sign.js";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-wrapper">
      <img id="chicken" src={chick} alt="chicken image"></img>
      <h2>Dev Coop</h2>
      <form method="post" id="Login-form">
        <input type="text" name="userName" placeholder="이메일" />
        <br />
        <input type="password" name="userPassword" placeholder="비밀번호" />
        <br />
        <br />
        <input type="submit" id="login" value="로그인" />
      </form>
      <text>
        만약 계정이 없다면?<Link to="/Sign">회원가입하기</Link>
      </text>
    </div>
  );
}

export default Login;
