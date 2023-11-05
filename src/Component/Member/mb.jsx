import React, { useState } from "react";
import * as S from "./style";
import data from "./data";
import img from "../../image/button.png";
import buttonoff from "../../image/buttonoff.png";

const TabButtonWithText = ({ onClick, active, text }) => (
  <S.TabButtonWithText onClick={onClick} active={active}>
    <img src={img} alt={text} /> {/* Use the imported image here */}
    {text}
  </S.TabButtonWithText>
);

// Similar changes in TeamSection component
const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("test1");

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
          text="텍스트 1"
        />
        <TabButtonWithText
          onClick={() => handleTabClick("test2")}
          active={activeTab === "test2"}
          text="텍스트 2"
        />
        <TabButtonWithText
          onClick={() => handleTabClick("test3")}
          active={activeTab === "test3"}
          text="텍스트 3"
        />
      </S.Buttons>
      <S.ImageLayer>
        <S.Image
          imageSource={img}
          active={activeTab === "test1"}
        />
        <S.Image
          imageSource={img}
          active={activeTab === "test2"}
        />
        <S.Image
          imageSource={img} 
          active={activeTab === "test3"}
        />
      </S.ImageLayer>
    </S.ProjectContainer>
  );
};

// Then export the TeamSection component
export default TeamSection;
