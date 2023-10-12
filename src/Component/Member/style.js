import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding: 100px 0;
  background: #fff;
  text-align: right;
`;

export const PJ = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  margin-right: 360px; // 텍스트 간격
  text-align: left;
`;

export const Project = styled(PJ)`
  margin-top: 100px;
  position: relative;
  left: 290px; 
  text-align: left;
`;

export const AripaySVG = styled.div`
  position: relative;
  top: 300px;
  left: 50%;
  transform: translate(-50%, -50%);
  `
