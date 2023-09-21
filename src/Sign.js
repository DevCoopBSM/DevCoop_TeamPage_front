import './App.css';
import chick from "./DevCoopL.svg"

function Sign() {
  return (
    <div className="login-wrapper">
      <img id="chicken" src={chick} alt="chicken image"></img>
      <h2>Dev Coop</h2>
      <form method="post" id="Login-form">
        <input type="text" name="userName" placeholder="이메일" /><br />
        <input type="password" name="userPassword" placeholder="비밀번호" /><br />
        <input type="password check" name="userPasswordcheck" placeholder="비밀번호 확인" /><br /><br />
        <input type="submit" id="login" value="회원가입" />
      </form>
    </div>
  );
}

export default Sign;