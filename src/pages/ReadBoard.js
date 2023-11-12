import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/ReadBoard.css";
import Modal from "react-modal";
import checkpopup from "../assets/mini_image.png";
import Navbar from "../Component/navbar";
import Board from "./Board";

function ReadBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const closeModal = () => setIsModalOpen(false);

  const handleEditClick = () => {
    navigate("/CreateBoard");
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.delete("http://10.129.57.6:5000/api/blog/1");
        console.log("DELETE 요청 완료");

        await axios.put("http://10.129.57.6:5000/api/blog/1", {
          title: "Updated Title",
          content: "Updated Content",
        });
        console.log("PUT 요청 완료");

        setLoading(false);
      } catch (error) {
        console.log("오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  const { id } = useParams(); // URL에서 게시물 ID 가져오기
  const [board, setBoard] = useState({});

  useEffect(() => {
    const getBoard = async () => {
      try {
        const resp = await axios.get(`http://10.129.57.6:5000/api/blog/${id}`);
        if (resp.data) {
          setBoard(resp.data);
        } else {
          console.log("서버로부터 데이터를 받아오지 못했습니다.");
        }
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다: ", error);
      }
      setLoading(false);
    };

    getBoard();
  }, [id]);

  return (
    <>
      <Navbar />
      <div id="mini-title">DevCoop 공지사항</div>
      <div className="board-box">
        <div className="main-title">{board.title}</div>
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
        <div className="content">{board.detail}</div>
      </div>
    </>
  );
}

export default ReadBoard;
