import "../Styles/Sign.css";
import chick from "./DevCoopL.svg";
import { Link } from "react-router-dom";

function Sign() {
  return (
    <div className="login-wrapper">
      <img id="chicken" src={chick} alt="chicken image"></img>
      <h2>Dev Coop</h2>
      <form method="post" id="Login-form">
        <input type="text" name="userName" placeholder="이메일" />
        <br />
        <input type="password" name="userPassword" placeholder="비밀번호" />
        <br />
        <input
          type="password check"
          name="userPasswordcheck"
          placeholder="비밀번호 확인"
        />
        <br />
        <br />
        <input type="submit" id="login" value="회원가입" />
        <br></br>
      </form>
      <text>
        이미 계정이 있다면?<Link to="/Login">로그인</Link>
      </text>
    </div>
  );
}

export default Sign;
