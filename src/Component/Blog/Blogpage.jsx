import React, { useEffect, useState } from "react";
import styled from "styled-components";
import checkpopup from ".././../assets/mini_image.png";
import Modal from "react-modal";
import { axiosInstance } from "../../util/axios";
import Navbar from "../navbar";
import * as S from "./style";

function Blog() {
  const [manager, setManager] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  function write(e) {
    if (manager) window.location.href = "/CreateBoard";
    else setIsModalOpen(true);
  }

  useEffect(() => {
    axiosInstance
      .get("/showboard")
      .then((response) => {
        console.log("성공");
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error("Data is not an array");
        }
      })
      .catch((error) => {
        console.log("실패", error);
      });
  }, []);

  const closeModal = () => setIsModalOpen(false);

  return (
    <S.AllContainer>
      <Navbar />
      <S.Title>데브쿠프 공지사항</S.Title>
      <S.WriteButton onClick={write}>글 쓰러 가기</S.WriteButton>
      <div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.40)",
            },
          }}
        >
          <S.ModalContent>
            <S.PopupOkay>관리자 권한을 확인해주세요</S.PopupOkay>
            <S.CheckButton onClick={() => setIsModalOpen(false)}>
              확인했어요
            </S.CheckButton>
            <S.PopupImage src={checkpopup} alt="popup" />
          </S.ModalContent>
        </Modal>
      </div>
      <S.PagesContainer>
        {data.map((data, index) => {
          if (index < 11) {
            return (
              <S.Page
                key={index}
                className={`page page-${index}`}
                style={{ top: `${index * 123}px` }}
              >
                <S.PageBox>
                  <S.MiniTitle>
                    <S.Link to={`/ReadBoard/${index}`}>{data.title}</S.Link>
                  </S.MiniTitle>
                  <S.Writer>{data.uuid}</S.Writer>
                </S.PageBox>
              </S.Page>
            );
          }
          return null;
        })}
      </S.PagesContainer>
    </S.AllContainer>
  );
}

export default Blog;
