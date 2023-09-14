import React, { useState } from "react";
import Modal from "react-modal";
import "./Styles/Blog.css";
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
  const [IsOpen, setIsOpen] = useState(false);
  function write(e) {
    if (manager) window.location.href = "/CreateBoard";
    else setIsOpen(true);
  }
  function Board(index) {
    window.location.href = "/ReadBoard";
  }

  return (
    <div id="all">
      <div className="header">
        <div className="title">데브쿠프 공지사항</div>
        <button id="to-write" onClick={write}>
          글 쓰러 가기
        </button>
        <Modal isOpen={IsOpen} onRequestClose={() => setIsOpen(false)}>
          <button onClick={() => setIsOpen(false)}>확인</button>
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
