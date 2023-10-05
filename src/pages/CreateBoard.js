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
    // POST 요청을 통해 title과 content를 DB로 전송. 여기서는 예시 URL을 사용하였습니다.
    axios
      .post("/api/create", { title: title, content: content })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    setIsModalOpen(false); // 모달 닫기
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
      <button type="button" id="result" onClick={() => setIsModalOpen(true)}>
        등록하기
      </button>

      {/* 확인했어요 버튼 클릭 시 sendDataToDB 함수 호출 */}

      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        id="modal"
        style={{ overlay: { backgroundColor: "rgba(0,0,0,0.75)" } }}
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
