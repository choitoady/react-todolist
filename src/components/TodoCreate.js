import { useState } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoCreate.css";

function TodoCreate({ onSubmit }) {
  const [text, setText] = useState("");

  function handleChangeInput(e) {
    setText(e.target.value);
  }
  const handleClickAddButton = () => {
    onSubmit(text); // 입력된 텍스트를 부모 컴포넌트에 전달합니다.
    setText(""); // 입력 필드 초기화
  };
  return (
    <div id="todoCreate">
      <input
        onChange={handleChangeInput}
        id="todoInput"
        placeholder="해야 할 일을 입력하세요."
        type="text"
        value={text}
      />
      <button id="addbtn" onClick={handleClickAddButton}>
        <MdAdd />
      </button>
    </div>
  );
}

export default TodoCreate;
