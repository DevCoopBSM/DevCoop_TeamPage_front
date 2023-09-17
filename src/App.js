
import './App.css';

function App() {
  return (
    <div className="login-wrapper">
      <h2>Dev Coop</h2>
      <form method="post" action="실제_서버_URL" id="login-form">
        <input type="text" name="userName" placeholder="이메일" /><br />
        <input type="password" name="userPassword" placeholder="비밀번호" /><br /><br />
        <input type="submit" id="login" value="로그인" />
      </form>
    </div>
  );
}

export default App;
