import styled from "styled-components";

export const TeamSectionContainer = styled.div`
  padding: 100px 0;
  background: #fff;
  text-align: right;
`;

export const TeamText = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  margin-right: 360px; // 텍스트 간격
  text-align: left;
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
