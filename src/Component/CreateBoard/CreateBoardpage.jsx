import React, { useState } from 'react';
import checkpopup from '../assets/mini_image.png';
import Navbar from '../Component/navbar';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from "../../util/axios";
import Modal from "react-modal";

import { Wrapper, Title, TitleBox, TextBox, Button, CustomModal, PopupText, CheckButton, PopupImage } from './style';

function CreateBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [detail, setContent] = useState('');
  const closeModal = () => setIsModalOpen(false);
  const navigate = useNavigate();

  const sendDataToDB = () => {
    axiosInstance.post('/create', {
      title: title,
      detail: detail,
    });
  };

  const goBlog = () => {
    navigate('/blog');
  };

  return (
    <Wrapper>
      <Navbar />
      <Title>데브쿠프 공지사항 - 글쓰기</Title>
      <TitleBox
        type="text"
        placeholder="제목을 입력해주세요"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextBox
        placeholder="본문을 입력해주세요"
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="button" onClick={() => setIsModalOpen(true)}>
        등록하기
      </Button>

      <CustomModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        id="modal"
      >
        <PopupText>공지글로 등록 하시겠어요?</PopupText>
        <CheckButton
          onClick={() => {
            sendDataToDB();
            closeModal();
            goBlog();
          }}
        >
          확인했어요
        </CheckButton>
        <PopupImage src={checkpopup} alt="popup" />
      </CustomModal>
    </Wrapper>
  );
}

export default CreateBoard;
