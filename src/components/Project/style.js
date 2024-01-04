import styled from "styled-components";

export const AripaySVG = styled.div`
  position: relative;
  top: 0;
  transform: translateX(-50%);
  transform: scale(0.8);
  width: 2750px;
  height: 680px;
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