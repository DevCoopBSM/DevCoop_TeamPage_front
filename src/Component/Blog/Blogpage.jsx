import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
      .get("/blog")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          throw new Error("Data received from server is not an array");
        }
      })
      .catch((error) => {
        console.error("An error occurred while fetching data: ", error);
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
              <Link to={`/ReadBoard/${data.board_id}`}>
                <S.Page
                  key={index}
                  idx={index}
                  className={`page page-${index}`}
                >
                  <S.PageBox>
                    <S.MiniTitle>{data.title}</S.MiniTitle>
                    <S.Writer>{data.uuid}</S.Writer>
                    <S.Date>
                      {new Date(data.date).toISOString().split("T")[0]}
                    </S.Date>
                  </S.PageBox>
                </S.Page>
              </Link>
            );
          }
          return null;
        })}
      </S.PagesContainer>
    </S.AllContainer>
  );
}

export default Blog;
