import React from "react";
import * as S from "./style";
import Aripay from "../../image/AriPay.svg";

const TeamSection = () => {
  return (
    <S.ProjectContainer id="프로젝트">
      <S.Project>저희의 프로젝트에요.</S.Project>
      <S.AripaySVG>
        <a href="http://pay.bsm-aripay.kr/" target="_blank">
          <img src={Aripay} alt="AriPay 이미지" />
          <div className="overlay-button"></div>
        </a>
      </S.AripaySVG>

    </S.ProjectContainer>
  );
};

export default TeamSection;
