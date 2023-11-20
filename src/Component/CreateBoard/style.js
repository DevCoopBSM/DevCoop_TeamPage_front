import styled from "styled-components";
import Modal from "react-modal";

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Title = styled.div`
  position: absolute;
  width: 569px;
  height: 60px;
  top: 150px;
  left: 245px;
  font-family: Inter;
  font-size: 30px;
  font-weight: 700;
  line-height: 61px;
  letter-spacing: 0em;
  text-align: left;
`;

// Add more styled components here...

export const TitleBox = styled.input`
  position: absolute;
  border: none;
  outline: none;
  width: 900px;
  height: 25px;
  top: 240px;
  left: 245px;
  padding: 30px 60px 30px 60px;
  border-radius: 10px;
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.25);
`;

export const TextBox = styled.textarea`
  position: absolute;
  border: none;
  outline: none;
  width: 900px;
  height: 270px;
  top: 360px;
  left: 245px;
  font-size: 20px;
  padding: 30px 60px 30px 60px;
  border-radius: 10px;
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.25);
  resize: none;
`;

export const Button = styled.button`
  cursor: pointer;
  position: absolute;
  border: none;
  width: 320px;
  height: 54px;
  top: 780px;
  left: 596px;
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  background: rgba(255, 194, 12, 1);
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.25);
`;

export const CustomModal = styled(Modal)`
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
export const PopupText = styled.button`
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

export const PopupImage = styled.button`
  position: absolute;
  top: 80.2px;
  width: 100%;
`;

// Add more styled components here...
