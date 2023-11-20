import React, { useState } from "react";
import * as S from "./style";
import button from "../../image/Vector.png";
import buttonoff from "../../image/Vectoroff.png";
import image1 from "../../image/team1.png";
import image2 from "../../image/team2.png";
import image3 from "../../image/mt.png";

const TabButtonWithText = ({ onClick, active, text }) => (
  <S.TabButtonWithText onClick={onClick} active={active}>
    <img src={active ? button : buttonoff} alt={text} />
    {text}
  </S.TabButtonWithText>
);

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("test1");
  const [slideIndex, setSlideIndex] = useState(0);

  const handleTabClick = (tab, index) => {
    setActiveTab(tab);
    setSlideIndex(index);
  };

  const getImageSource = (tab) => {
    switch (tab) {
      case "test1":
        return image1;
      case "test2":
        return image2;
      case "test3":
        return image3;
      default:
        return buttonoff;
    }
  };

  return (
    <S.ProjectContainer id="프로젝트">
      <S.Project>저희 팀 멤버들이에요.</S.Project>
      <S.Buttons>
        {["test1", "test2", "test3"].map((tab, index) => (
          <TabButtonWithText
            key={tab}
            onClick={() => handleTabClick(tab, index)}
            active={activeTab === tab}
            text={`${index + 1}기`}
          />
        ))}
      </S.Buttons>
      <S.ImageLayer>
        <S.Wrapper slideIndex={slideIndex}>
          {["test1", "test2", "test3"].map((tab, index) => (
            <S.Slide key={tab}>
              <S.Photo
                src={getImageSource(tab)}
                alt={tab}
              />
            </S.Slide>
          ))}
        </S.Wrapper>
      </S.ImageLayer>
    </S.ProjectContainer>
  );
};

export default TeamSection;
