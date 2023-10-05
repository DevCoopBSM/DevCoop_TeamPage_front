import './App.css';
import project1 from "./P1.png"
import project2 from "./P2.png"
import project3 from "./P3.png"
import ari from "./AriPayL_ver2.svg"
import { Link } from "react-router-dom";


function Project() {
  return (
  <div class="pro1-wrap">
    <div class="ar2"><img id="ariii" src={ari} alt="ari image"></img></div>
    <div class="headline-text">
      <p>
        <p class="head">실물상품권을 학생증으로</p>
        <p id="head1">아리페이</p>
      </p>
    </div>
      <div class="pro1-text">
        <p><p class="text1">편리한 잔액 조회</p>
          알이와 편하게 잔액을 조회해 보세요.<br></br>
          남은 돈은 알이가 보관해 두니<br></br>
          5000원의 강박을 지킬 필요 없어요.</p>
      </div>
      <div class="pro1-image">
        <img id="pro1" src={project1} alt="project1 image"></img>
      </div>

      <div class="pro2-text">
        <p><p class="text2">어디에서든 가능한 로그 조회</p>
          언제, 어디서든 아리페이에 들어와<br></br>
          빠른 사용 내역을 확인 해보세요.<br></br>
          내가 언제, 얼마나 사용했는 지 알 수 있어요.</p>
      </div>
      <div class="pro2-image">
        <img id="pro2" src={project2} alt="project2 image"></img>
      </div>



      <div class="pro3-text">
        <p><p class="text3">쉽고 빠른 결제</p>
          학생증 하나만 제시해 주세요.<br></br>
          카드나 현급을 꺼낼 필요도, 상품권을 낼 필요도 없어요.<br></br>
          더욱이, 학번 이름을 부를 필요도요!</p>
      </div>
      <div class="pro3-image">
        <img id="pro3" src={project3} alt="project3 image"></img>
      </div>


      <div class="foot-wrapeer">
        <div class="ar2"><img id="ariii" src={ari} alt="ari image"></img></div>
        <div class="headline-text2">
          <p>
            <p class="head3">소중한 상품권,
            <p class="head3">
              이젠 알이에게 맡겨주세요.
            </p>
            </p>
            <p id="head1">아리페이</p>
          </p>
          <button id="probtn">>프로젝트보러가기</button>
        </div>
      </div>
      
      
  </div>
  );
}

export default Project;