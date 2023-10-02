import React, { useState } from "react";
import "../Styles/Blog.css";
import checkpopup from "../assets/mini_image.png";
import Modal from "react-modal";
import Pagination from "react-js-pagination";
/*feat : 새로운 기능 추가
fix : 버그 수정
docs : 문서 수정
style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
refactor : 코드 리펙토링
test : 테스트 코드, 리펙토링 테스트 코드 추가
chore : 빌드 업무 수정, 패키지 매니저 수정*/
const pagesData = [
  {
    title: "뭔지는 모르겠지만 깔쌈한 제목",
    writer: "작성자: 박현준",
    date: "20XX. 0X. XX",
  },
  {
    title: "다른 제목",
    writer: "작성자: 다른 작성자",
    date: "20XX. 0X. XX",
  },
  {
    title: "또 다른 제목",
    writer: "작성자: 또 다른 작성자",
    date: "20YY. YY. YY",
  },
  {
    title: "또 다른 제목",
    writer: "작성자: 또 다른 작성자",
    date: "20YY. YY. YY",
  },
  {
    title: "또 다른 제목",
    writer: "작성자: 또 다른 작성자",
    date: "20YY. YY. YY",
  },
  {
    title: "또 다른 제목",
    writer: "작성자: 또 다른 작성자",
    date: "20YY. YY. YY",
  },
  {
    title: "또 다른 제목",
    writer: "작성자: 또 다른 작성자",
    date: "20YY. YY. YY",
  },
  {
    title: "또 다른 제목",
    writer: "작성자: 또 다른 작성자",
    date: "20YY. YY. YY",
  },
  {
    title: "또 다른 제목",
    writer: "작성자: 또 다른 작성자",
    date: "20YY. YY. YY",
  },
  {
    title: "또 다른 제목",
    writer: "작성자: 또 다른 작성자",
    date: "20YY. YY. YY",
  },
  {
    title: "또 다른 제목",
    writer: "작성자: 또 다른 작성자",
    date: "20YY. YY. YY",
  },
  {
    title: "또 다른 제목",
    writer: "작성자: 또 다른 작성자",
    date: "20YY. YY. YY",
  },
  //데이터삽입 db 추가
];

function Blog() {
  const [manager, setManager] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  function write(e) {
    if (manager) window.location.href = "/CreateBoard";
    else setIsModalOpen(true);
  }
  function Board(index) {
    window.location.href = "/ReadBoard";
  }
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
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <h2>hi</h2>
          <p>it's me</p>
          <button id="check" onClick={setIsModalOpen(false)}>
            학인햇어요
          </button>
        </Modal>
      </div>
      <div className="pages">
        {pagesData.map((page, index) => {
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
