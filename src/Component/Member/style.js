import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding: 100px 0;
  background: #fff;
  text-align: right;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
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
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.imageSource});
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(${(props) => (props.active ? 1 : 0.7)});
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1);
  }
`;

export const ImageLayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100px; /* 이미지의 높이에 맞게 조절 */
  overflow: hidden;
`;

export const Image = styled.div`
  background-image: url(${(props) => props.imageSource});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.3s;
`;

export const PJS = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  margin-right: 360px; // 텍스트 간격
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
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: ${({ direction }) => direction === "prev" && "0px"};
  right: ${({ direction }) => direction === "next" && "0px"};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
`;

export const DotContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: pink;
  cursor: pointer;
  &.active {
    background-color: skyblue;
  }
`;
