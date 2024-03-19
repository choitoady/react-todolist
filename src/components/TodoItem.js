import { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import "./TodoItem.css";

function TodoItem({ todo, todoList, setTodoList }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const handleDelete = () => {
    // 해당 할 일을 todoList에서 제외합니다.
    const updatedTodoList = todoList.filter((item) => item.id !== todo.id);
    // 새로운 todoList로 업데이트합니다.
    setTodoList(updatedTodoList);
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleEditChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleEditSave = () => {
    const updatedTodoList = todoList.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          text: editedText,
        };
      }
      return item;
    });
    setTodoList(updatedTodoList);
    setIsEditing(false);
  };

  const handleCompleteChange = () => {
    
  }
  return (
    <div className="todoItem">
      {isEditing ? (
        <>
          <input type="text" value={editedText} onChange={handleEditChange} />
          <button onClick={handleEditSave}>저장</button>
        </>
      ) : (
        <>
          <input type="checkBox" id="checkTodo" onClick={handleCompleteChange}/>
          <div>{todo.text}</div>
          <button onClick={handleEditClick}>
            <LuPencilLine />
          </button>
          <button onClick={handleDelete}>
            <MdDelete />
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
