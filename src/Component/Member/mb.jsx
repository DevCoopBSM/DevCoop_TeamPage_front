import React, { useState } from "react";
import * as S from "./style";
import button from "../../image/button.png";
import buttonoff from "../../image/buttonoff.png";

const TabButtonWithText = ({ onClick, active, text }) => (
  <S.TabButtonWithText onClick={onClick} active={active}>
    <img src={active ? button : buttonoff} alt={text} /> {/* Use the imported image here */}
    {text}
  </S.TabButtonWithText>
);

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("test1"); // Default = "test1"

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <S.ProjectContainer id="프로젝트">
      <S.Project>저희 팀 멤버들이에요.</S.Project>
      <S.Buttons>
        <TabButtonWithText
          onClick={() => handleTabClick("test1")}
          active={activeTab === "test1"}
          text="1기"
        />
        <TabButtonWithText
          onClick={() => handleTabClick("test2")}
          active={activeTab === "test2"}
          text="2기"
        />
        <TabButtonWithText
          onClick={() => handleTabClick("test3")}
          active={activeTab === "test3"}
          text="Mento"
        />
      </S.Buttons>
      <S.ImageLayer>
        <S.Image
          imageSource={activeTab === "test1" ? button : buttonoff}
          active={activeTab === "test1"}
        />
        <S.Image
          imageSource={activeTab === "test2" ? button : buttonoff}
          active={activeTab === "test2"}
        />
        <S.Image
          imageSource={activeTab === "test3" ? button : buttonoff}
          active={activeTab === "test3"}
        />
      </S.ImageLayer>
    </S.ProjectContainer>
  );
};

export default TeamSection;
