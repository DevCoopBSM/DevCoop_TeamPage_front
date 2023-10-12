import styled from "styled-components";

export const AllContainer = styled.div`
  /* 스타일을 적용할 부모 컨테이너 스타일링 */
`;

export const Title = styled.div`
  position: absolute;
  width: 400px;
  height: 30px;
  font-size: 30px;
  font-weight: 700;
  line-height: 50px;
  text-align: left;
  top: 160px;
  left: 200px;
`;

export const WriteButton = styled.button`
  position: absolute;
  text-align: center;
  border: none;
  cursor: pointer;
  top: 160px;
  left: 1110px;
  line-height: 45px;
  width: 225px;
  height: 45px;
  font-weight: 800;
  font-size: 17.5px;
  background-color: rgba(255, 194, 12, 1);
  color: white;
  size: 90px;
  border-radius: 8px;
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.25);
`;

export const ModalContent = styled.div`
  display: flex !important;
  width: 390px;
  height: 157.5px;
  padding: 0px !important;
  border-radius: 16px !important;
  justify-content: center !important;
  align-items: center !important;
  margin: 0 auto !important;
  margin-top: auto !important;
  margin-bottom: auto !important;
  border: none !important;
`;

export const PopupOkay = styled.span`
  position: absolute;
  width: 300px;
  height: 30px;
  font-size: 21px;
  font-weight: bold;
  line-height: 50px;
  text-align: left;
  top: 25px;
  left: 45px;
  font-style: bold;
`;

export const CheckButton = styled.button`
  position: absolute;
  text-align: center;
  border: none;
  cursor: pointer;
  top: 78px;
  left: 45px;
  line-height: 24px;
  width: 137.5px;
  height: 29px;
  font-weight: 900;
  font-size: 13.5px;
  background-color: rgba(255, 194, 12, 1);
  color: white;
  size: 90px;
  border-radius: 8px;
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.25);
  z-index: 1201;
`;

export const PopupImage = styled.img`
  position: absolute;
  top: 80.2px;
  width: 100%;
`;

export const PagesContainer = styled.div`
  /* 페이지 컨테이너 스타일링 */
`;

export const Page = styled.div`
  /* 페이지 스타일링 */
`;

export const PageBox = styled.div`
  position: absolute;
  top: 240px;
  left: 200px;
  width: 1140px;
  height: 110px;
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  cursor: pointer;
`;

export const MiniTitle = styled.div`
  position: absolute;
  width: 458px;
  height: 44px;
  left: 54px;
  top: 51px;
  font-weight: 600;
  font-size: 26px;
  line-height: 44px;
  align-items: center;
  color: #000000;
`;

export const Writer = styled.div`
  position: absolute;
  width: 205px;
  height: 22px;
  left: 455px;
  top: 67px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  align-items: center;
  text-align: left;
  color: #565656;
`;
