import React, { useState } from "react";
import "./App.css";
import TodoComplete from "./components/TodoComplete";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "밥먹기",
      checked: false,
    },
    {
      id: 2,
      text: "밥먹기",
      checked: false,
    },
  ]);
  const onSubmit = (newTodoText) => {
    const newTodo = {
      id: todoList.length + 1, // 현재 배열 길이보다 1 큰 id를 부여합니다.
      text: newTodoText,
      checked: false,
    };
    setTodoList([...todoList, newTodo]); // 새로운 할일을 기존 배열에 추가합니다.
  };

  return (
    <div className="todoApp">
      <TodoTemplate>
        <TodoHead todoList={todoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
        <TodoCreate onSubmit={onSubmit} />
      </TodoTemplate>
      <TodoComplete className="TodoComplete" />
    </div>
  );
}

export default App;
