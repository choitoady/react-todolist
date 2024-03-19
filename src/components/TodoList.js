import React from "react";
import TodoItem from "./TodoItem.js";
import "./TodoList.css";

function TodoList({ todoList, setTodoList }) {
  return (
    <div className="todoList">
      {todoList.map((todo) => (
        <TodoItem
          todoList={todoList}
          setTodoList={setTodoList}
          todo={todo}
          key={todo.id}
        />
      ))}
    </div>
  );
}

export default TodoList;
