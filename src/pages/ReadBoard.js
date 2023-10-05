import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/ReadBoard.css";

function ReadBoard() {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/CreateBoard");
  };

  return (
    <>
      <div id="mini-title">DevCoop 공지사항</div>
      <div className="board-box">
        <div className="main-title">테스트용 데브쿠프 공지사항</div>
        <button onClick={handleEditClick} id="edit">
          수정
        </button>
        <div id="remove">삭제</div>
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
