// src/components/TeamSection.js
import React from "react";
import * as S from "./style";

const TeamSection = () => {
  return (
    <S.TeamSectionContainer id="팀">
      <S.TeamTextRight>DevCoop, Develop & Cooperation </S.TeamTextRight>
      <br></br><S.TeamTextRight2>우리는 이런 개발자로 성장해요.</S.TeamTextRight2>
      <p></p>
      <S.TeamTextRight4>분야를 가리지 않는</S.TeamTextRight4><br></br>
      <S.TeamTextRight3>프론트엔드, 백엔드를 불문하고<br></br>
      모든 기술을 사용할 수 있는 개발자로 성장해요.</S.TeamTextRight3>
      <p></p>
      <S.TeamTextleft>성실하게 일을 수행하는</S.TeamTextleft>
      <S.TeamTextleft2>Coop는 Cooperation, 협업에서 따왔어요.<br></br>
그만큼 우리는 협업을 잘하는 개발자로 성장하고 있어요.</S.TeamTextleft2>
      <p></p>
      <S.TeamTextRight4>협업을 잘하는</S.TeamTextRight4><br></br>
      <S.TeamTextRight3>모든 것의 기본은 성실!<br></br>
언제나 성실하면 그만큼의 결과가 돌아온다고 생각해요.</S.TeamTextRight3>
    </S.TeamSectionContainer>
  );
};

export default TeamSection;
