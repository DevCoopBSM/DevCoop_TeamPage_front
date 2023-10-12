import React, { useState } from "react";
import "../Styles/CreateBoard.css";
import Modal from "react-modal";
import checkpopup from "../assets/mini_image.png";

// axios import 추가
import axios from "axios";

function CreateBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(""); // 제목 상태 추가
  const [content, setContent] = useState(""); // 본문 상태 추가

  const closeModal = () => setIsModalOpen(false);

  // DB로 값 전송 함수
  const sendDataToDB = () => {
    axios
      .post("http://10.10.0.15:5000/api/showboard", {
        title: title,
        content: content,
      })
      .then((response) => {
        console.log("성공");
        closeModal();
      })
      .catch((error) => {
        console.log("실패", error);
      });
  };

  return (
    <div id="all-wrap">
      <div id="main-title">데브쿠프 공지사항 - 글쓰기</div>
      <div className="title-box">
        {/* 제목 입력 시 상태 업데이트 */}
        <input
          type="text"
          id="title"
          placeholder="제목을 입력해주세요"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div className="content-box">
        {/* 본문 입력 시 상태 업데이트 */}
        <input
          type="text"
          id="content"
          placeholder="본문을 입력해주세요"
          onChange={(e) => setContent(e.target.value)}
        ></input>
      </div>

      {/* 모달 창이 열리게 변경 */}
      <button type="button" id="result" onClick={() => setIsModalOpen(true)}>
        등록하기
      </button>

      {/* 확인했어요 버튼 클릭 시 sendDataToDB 함수 호출 */}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{ overlay: { backgroundColor: "rgba(0,0,0,0.40)" } }}
        id="modal"
      >
        <span id="popup_okay">공지글로 등록 하시겠어요?</span>
        {/* 확인했어요 버튼 클릭 시 sendDataToDB 함수 호출 */}
        <button id="check" onClick={sendDataToDB}>
          확인했어요
        </button>
        <img src={checkpopup} alt="popup" id="popup" />
      </Modal>
    </div>
  );
}

export default CreateBoard;
