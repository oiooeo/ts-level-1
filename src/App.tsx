import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import styled from "styled-components";

interface Todo {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
}

function App() {
  const localData = localStorage.getItem("todoItem");
  const [todoList, setTodoList] = useState(() => {
    return localData
      ? JSON.parse(localData)
      : [
          {
            id: 0,
            title: "리액트 공부하기",
            content: "리액트 입문 강의 듣기",
            isDone: true,
          },
          {
            id: 1,
            title: "리액트 공부하기",
            content: "리액트 숙련 강의 듣기",
            isDone: false,
          },
        ];
  });

  const [todo, setTodo] = useState<Todo>({
    id: 0,
    title: "",
    content: "",
    isDone: false,
  });

  return (
    <Layout>
      <Header>MY TO-DO LIST</Header>

      <Input
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      ></Input>

      <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
  font-family: "Noto Sans KR", sans-serif;
`;

const Header = styled.header`
  padding: 10px;
  font-size: 15px;
`;
