import './App.css';
import project1 from "./P1.png"
import { Link } from "react-router-dom";


function Project() {
  return (
    <div class="pro1-wrap">
        <div class="pro1-text">
          <h3>편리한 잔액 조회<br/></h3>
          <h4>알이와 편하게 잔액을 조회해 보세요.<br/>
          남은 돈은 알이가 보관해 두니<br/>
          5000원의 강박을 지킬 필요 없어요.</h4>
        </div>
        <div class="pro1-image">
          <img id="pro1" src={project1} alt="project image"></img>
        </div>
    </div>
  );
}

export default Project;