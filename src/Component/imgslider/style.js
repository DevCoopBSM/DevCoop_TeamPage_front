import styled from "styled-components";

export const ImageSliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px; // 이미지 높이 조절
  overflow: hidden;
  margin-top: 20px; // Navbar와 간격 조절
`;

export const TransparentBlackBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); // 반투명 검정색 배경
  z-index: 1;
`;

export const DevCoopText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-family: Inter;
  font-size: 100px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  z-index: 2;
`;