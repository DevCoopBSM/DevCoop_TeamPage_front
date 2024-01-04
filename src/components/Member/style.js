import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding: 100px 0;
  background: #fff;
  text-align: right;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 20%; 
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TabButtonWithText = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0 10px;
  padding: 0;
  display: inline-block;
  position: relative;
  overflow: hidden;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background-color 0.3s; // 페이드 효과
  }

  &:hover:before {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;



export const ImageLayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 1000px;
  height: 200px;
  overflow: hidden;
`;

export const PJS = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  margin-right: 360px;
  text-align: left;
`;

export const Project = styled(PJS)`
  margin-top: 100px;
  position: relative;
  left: 290px; 
  text-align: left;
`;

export const Container = styled.div`
  width: 200px;
  height: 200px;
  margin: 100px auto;
  overflow: hidden;
  position: relative;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.3s ease-in-out;
  transform: translateX(${({ slideIndex }) => slideIndex * -100 + "%"});
  text-align: center;
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: inline-block; 
`;

export const Photo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; // 이미지 자르기
  display: inline-block; 
`;