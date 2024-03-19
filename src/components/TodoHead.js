import React from "react";
import "./TodoHead.css";

function TodoHead({ todoList }) {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();

  const week = ["일", "월", "화", "수", "목", "금", "토"];
  let getweek = week[now.getDay()];
  return (
    <div className="header">
      <h1>
        {year}년 {month}월 {date}일
      </h1>
      <div className="day">{getweek}요일</div>
      <div className="tasks-left">할 일 {todoList.length}개 남음</div>
    </div>
  );
}

export default TodoHead;
