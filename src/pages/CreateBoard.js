import React from "react";
import "../Styles/CreateBoard.css";

function CreateBoard() {
  //박스들 세로, 가로 크기 좀 줄이기로
  return (
    <>
      <div id="main-title">데브쿠프 공지사항 - 글쓰기</div>
      <div className="title-box">
        <input type="text" id="title" placeholder="제목을 입력해주세요"></input>
      </div>
      <div className="explain-box">
        <input
          type="text"
          id="explain"
          placeholder="설명을 입력해주세요"
        ></input>
      </div>
      <div className="content-box">
        <input
          type="text"
          id="content"
          placeholder="본문을 입력해주세요"
        ></input>
      </div>
      <button type="button" id="result">
        등록하기
      </button>
    </>
  );
}

export default CreateBoard;
