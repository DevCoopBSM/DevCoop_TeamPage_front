import React, { useEffect, useState } from "react";
import axiosInstance from "../util/axios";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/ReadBoard.css";
import Modal from "react-modal";
import checkpopup from "../assets/mini_image.png";
import Navbar from "../components/navbar";

function ReadBoard() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const closeModal = () => setIsModalOpen(false);

  const deletePost = async () => {
    try {
      await axiosInstance.delete(`http://10.129.57.6:5000/api/delete/${id}`);
      navigate("/blog");
    } catch (err) {
      console.log(err);
    }
  };

  const putPost = async () => {
    try {
      await axiosInstance.put(`http://10.129.57.6:5000/api/blog/${id}`, {
        title: "Updated Title",
        content: "Updated Content",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getBoard = async () => {
    try {
      const res = await axiosInstance.get(
        `http://10.129.57.6:5000/api/blog/${id}`
      );
      setBoard(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const [board, setBoard] = useState({});

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <>
      <Navbar />
      <div id="mini-title">DevCoop 공지사항</div>
      <div className="board-box">
        <div className="main-title">{board.title}</div>
        <button onClick={() => navigate(`/CreateBoard/${id}`)} id="edit">
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
          <button
            id="check1"
            onClick={() => {
              deletePost();
              setIsModalOpen(false);
            }}
          >
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
