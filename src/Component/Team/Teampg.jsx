// src/components/TeamSection.js
import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";


  

const TeamSection = () => {
  const [isTextVisible, setTextVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
        } else {
          setTextVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);
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
