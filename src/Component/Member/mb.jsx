import React, { useState } from "react";
import * as S from "./style";
import data from "./data";

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("test1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  

function Slider2() {
  const [slideIndex, setSlideIndex] = useState(0);

  const moveToPrevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const moveToNextSlide = () => {
    setSlideIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <S.Container>
      <S.Arrow direction="prev" onClick={moveToPrevSlide}>
        ◀
      </S.Arrow>
      <S.Wrapper slideIndex={slideIndex}>
        {data.map((character) => (
          <S.Slide key={character.id}>
            <S.Photo
              src={process.env.PUBLIC_URL + `/img/slider/${character.img}`}
            />
          </S.Slide>
        ))}
      </S.Wrapper>
      <S.Arrow direction="next" onClick={moveToNextSlide}>
        ▶
      </S.Arrow>
      <S.DotContainer>
        {data.map((character, index) => (
          <S.Dot
            key={character.id}
            className={index === slideIndex ? "active" : null}
            onClick={() => moveDot(index)}
          />
        ))}
      </S.DotContainer>
    </S.Container>
  );
}


  return (
    <S.ProjectContainer id="프로젝트">
      <S.Project>저희 팀 멤버들이에요.</S.Project>
      <S.Buttons>
        <TabButtonWithText
          onClick={() => handleTabClick("test1")}
          active={activeTab === "test1"}
          imageSource="../../image/button"
          text="텍스트 1"
        />
        <TabButtonWithText
          onClick={() => handleTabClick("test2")}
          active={activeTab === "test2"}
          imageSource="../../image/button.png"
          text="텍스트 2"
        />
        <TabButtonWithText
          onClick={() => handleTabClick("test3")}
          active={activeTab === "test3"}
          imageSource="../../image/button.png"
          text="텍스트 3"
        />
      </S.Buttons>
      <S.ImageLayer>
        <S.Image
          imageSource="../../image/buttonoff.png"
          active={activeTab === "test1"}
        />
        <S.Image
          imageSource="../../image/buttonoff.png"
          active={activeTab === "test2"}
        />
        <S.Image
          imageSource="../../image/buttonoff.png"
          active={activeTab === "test3"}
        />
      </S.ImageLayer>
    </S.ProjectContainer>
  );
};

const TabButtonWithText = ({ onClick, active, imageSource, text }) => (
  <S.TabButtonWithText onClick={onClick} active={active}>
    <img src={imageSource} alt={text} />
    {text}
  </S.TabButtonWithText>
);

export default TeamSection;
