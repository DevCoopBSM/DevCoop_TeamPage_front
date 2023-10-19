import styled, { keyframes } from "styled-components";

export const fontface = styled.span`
  font-family: 'Inter';
  src: url('Inter.ttf') format('truetype'); /* 폰트 파일 경로와 형식에 따라 수정 */
  font-weight: normal;
  font-style: normal;
`;


export const ImageSliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  overflow: hidden;
  margin-top: 80px; // navbar 크기에 맞추어 수정
  
`;

export const TransparentBlackBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
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

export const DevCoopText = styled(fontface)`
  position: absolute;
  top: 65%;
  left: 20%;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 80px;
  font-style: normal;
  font-weight: 1000;
  line-height: normal;
  z-index: 2;
  animation: ${slideAndFade} 0.8s ease-in-out; /* 1초 동안 위에서 아래로 내려오면서 페이드 인 */
`;