import React from "react";
import "./TodoTemplate.css";

function TodoTemplate({ children }) {
  return (
    <>
      <div className="template">{children}</div>
    </>
  );
}

export default TodoTemplate;
