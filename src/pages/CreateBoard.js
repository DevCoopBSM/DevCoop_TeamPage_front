import React, { useState } from "react";
import "../Styles/CreateBoard.css";
import Modal from "react-modal";
import checkpopup from "../assets/mini_image.png";

function CreateBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  return (
    <div id="all-wrap">
      <div id="main-title">데브쿠프 공지사항 - 글쓰기</div>
      <div className="title-box">
        <input type="text" id="title" placeholder="제목을 입력해주세요"></input>
      </div>
      <div className="content-box">
        <input
          type="text"
          id="content"
          placeholder="본문을 입력해주세요"
        ></input>
      </div>
      <button type="button" id="result" onClick={() => setIsModalOpen(true)}>
        등록하기
      </button>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        id="modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        }}
      >
        <span id="popup_okay">공지글로 등록 하시겠어요?</span>
        <button id="check" onClick={() => setIsModalOpen(false)}>
          확인했어요
        </button>
        <img src={checkpopup} alt="popup" id="popup" />
      </Modal>
    </div>
  );
}

export default CreateBoard;
