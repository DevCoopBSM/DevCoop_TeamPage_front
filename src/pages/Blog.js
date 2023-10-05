import React, { useEffect, useState } from "react";
import "../Styles/Blog.css";
import checkpopup from "../assets/mini_image.png";
import Modal from "react-modal";
import Pagination from "react-js-pagination";
import axios from "axios";
/*feat : 새로운 기능 추가
fix : 버그 수정
docs : 문서 수정
style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
refactor : 코드 리펙토링
test : 테스트 코드, 리펙토링 테스트 코드 추가
chore : 빌드 업무 수정, 패키지 매니저 수정*/

function Blog() {
  const [manager, setManager] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  function write(e) {
    if (manager) window.location.href = "/CreateBoard";
    else setIsModalOpen(true);
  }
  function Board(index) {
    window.location.href = "/ReadBoard";
  }

  useEffect(() => {
    axios
      .get("http://192.168.10.1:5000/api/showboard")
      .then((response) => {
        // 성공했을 때 로직
        console.log("성공");
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error("Data is not an array");
        }
      })
      .catch((error) => {
        // 실패시
        console.log("실패", error);
      });
  }, []);

  const Paging = ({ page, count, setPage }) => {
    return (
      <div>
        <Pagination
          activePage={page}
          itemsCountPerPage={5}
          totalItemsCount={count}
          pageRangeDisplayed={5}
          prevPageText={"<"}
          nextPageText={">"}
          onChange={setPage}
        />
      </div>
    );
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div id="all">
      <div className="header">
        <div className="title">데브쿠프 공지사항</div>
        <button id="to-write" onClick={write}>
          글 쓰러 가기
        </button>
      </div>
      <div>
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
          <span id="popup_okay">관리자 권한을 확인해주세요</span>
          <button id="check" onClick={() => setIsModalOpen(false)}>
            확인했어요
          </button>
          <img src={checkpopup} alt="popup" id="popup" />
        </Modal>
      </div>
      <div className="pages">
        {data.map((page, index) => {
          if (index < 11) {
            //11넘으면안보이게
            return (
              <div
                key={index}
                className={`page page-${index}`}
                style={{ top: `${index * 123}px` }}
              >
                <div className="page-box">
                  <div className="mini-title">{page.title}</div>
                  <div className="writer">{page.writer}</div>
                  <div className="date">{page.date}</div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="next-buttons">
        {/* <button type="button" id="third-button">
          3
        </button> */}
      </div>
    </div>
  );
}

export default Blog;
