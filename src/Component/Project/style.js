import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding: 100px 0;
  background: #fff;
  text-align: right;
  position: relative;
`;

export const PJ = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  margin-right: 360px;
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
  top: 0;
  transform: translateX(-50%);
  transform: scale(0.8);
  width: 1400px;
  height: auto;
  preserveAspectRatio: none;
  overflow: hidden;
  .overlay-button {
    position: absolute;
    top: 270px;
    left: 960px;
    width: 340px;
    height: 100px;
    background-color: transparent;
    
    cursor: pointer;
    z-index: 2;
  }
  img {
    z-index: 1;
  }
}`
