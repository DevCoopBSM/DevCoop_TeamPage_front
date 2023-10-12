import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/ReadBoard.css";
import Modal from "react-modal";
import checkpopup from "../assets/mini_image.png";
import Navbar from "../Component/navbar";

function ReadBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const closeModal = () => setIsModalOpen(false);

  const handleEditClick = () => {
    navigate("/CreateBoard");
  };
  useEffect(() => {
    // DELETE 요청
    axios
      .delete("http://10.10.0.15:5000/api/showboard/1")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // PUT 요청
    axios
      .put("http://10.10.0.15:5000/api/showboard/1", {
        title: "Updated Title",
        content: "Updated Content",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div id="mini-title">DevCoop 공지사항</div>
      <div className="board-box">
        <div className="main-title">테스트용 데브쿠프 공지사항</div>
        <button onClick={handleEditClick} id="edit">
          수정
        </button>
        <button id="remove" onClick={() => setIsModalOpen(true)}>
          삭제
        </button>
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          id="modal"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.40)",
            },
          }}
        >
          <span id="popup_okay">정말로 삭제하시겠습니까?</span>
          <button id="check2" onClick={() => setIsModalOpen(false)}>
            취소
          </button>
          <button id="check1" onClick={() => setIsModalOpen(false)}>
            삭제
          </button>
          <img src={checkpopup} alt="popup" id="popup" />
        </Modal>
        <div className="content">
          여기부터는 본문입니다! 여기부터는 본문입니다! 여기부터는 본문입니다!
          여기부터는 본문입니다! 여기부터는 본문입니다! 여기부터는 본문입니다!
          여기부터는 본문입니다! 여기부터는 본문입니다! 여기부터는 본문입니다!
          여기부터는 본문입니다! 여기부터는 본문입니다! 여기부터는 본문입니다!
          여기부터는 본문입니다! 여기부터는 본문입니다! 여기부터는 본문입니다!
          여기부터는 본문입니다! 여기부터는 본문입니다! 여기부터는 본문입니다!
          여기부터는 본문입니다! 여기부터는 본문입니다! 여기부터는 본문입니다!
          여기부터는 본문입니다! 여기부터는 본문입니다! 여기부터는 본문입니다!
        </div>
      </div>
    </>
  );
}

export default ReadBoard;
