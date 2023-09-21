// src/styles.js
import styled from "styled-components";

export const TeamSectionContainer = styled.div`
  padding: 100px 0; // 팀 섹션 상하 간격 조절
  background: #f0f0f0; // 팀 섹션 배경색 설정
  text-align: center;
`;

export const TeamText = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 360px; // 텍스트 간격 조절
`;

export const TeamTextRight = styled(TeamText)`
  margin-left: 360px; // 텍스트 간격 조절
`;

