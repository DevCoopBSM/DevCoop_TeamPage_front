import styled, { keyframes } from "styled-components";


export const TeamSectionContainer = styled.div`
  padding: 100px 0;
  background: #fff;
  text-align: right;
  overflow: hidden; /* 추가: 텍스트가 화면을 넘어갈 때 숨김 처리 */
`;

const slideAndFade = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const TeamText = styled.div`
  animation: ${slideAndFade} 1s ease forwards;
  color: #000;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  margin-right: 360px; // 텍스트 간격
  text-align: left;
  opacity: ${props => props.isVisible ? 1 : 0};
  
  transition: opacity 1s, transform 1s;
`;

export const TeamTextleft = styled(TeamText)`
  margin-top: 100px;
  position: relative;
  left: 90px;
  text-align: right;
  font-size: 30px;
`;

export const TeamTextleft2 = styled(TeamText)`
  margin-top: 20px;
  position: relative;
  font-weight: 500;
  left: 90px;
  font-size: 25px;
  text-align: right;
`;

export const TeamTextRight = styled(TeamText)`
  margin-top: 100px;
  position: relative;
  left: 290px; 
  text-align: left;
`;

export const TeamTextRight2 = styled(TeamText)`
  position: relative;
  left: 290px; 
  text-align: left;
  font-size: 30px;
`;

export const TeamTextRight3 = styled(TeamText)`
  position: relative;
  font-weight: 500;
  font-size: 25px;
  left: 290px; 
  text-align: left;
`;

export const TeamTextRight4 = styled(TeamText)`
margin-top: 100px;
  position: relative;
  left: 290px; 
  text-align: left;
  font-size: 30px;
`;


