import React from "react";
import styled from "styled-components";

interface Todo {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
}

interface InputProps {
  todo: Todo;
  setTodo: any;
  todoList: Todo[];
  setTodoList: any;
}

const Input: React.FC<InputProps> = ({
  todo,
  setTodoList,
  todoList,
  setTodo,
}: InputProps) => {
  const setValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setTodo({ ...todo, [name]: value });
  };

  const clickAddButtonHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodoList = {
      // id: todoList[todoList.length - 1]?.id + 1 || 1,
      ...todo,
      isDone: false,
      id: Date.now(),
    };

    setTodoList([...todoList, newTodoList]);
    setTodo({ title: "", content: "" });
    localStorage.setItem(
      "todoItem",
      JSON.stringify([...todoList, newTodoList])
    );
  };

  return (
    <InputForm onSubmit={clickAddButtonHandler}>
      <InputContainer>
        <b>제목</b> &nbsp;
        <InputInput
          name="title"
          value={todo.title}
          onChange={setValue}
          required
        />
        <b>내용</b> &nbsp;
        <InputInput
          name="content"
          value={todo.content}
          onChange={setValue}
          required
        />
      </InputContainer>
      <InputButton>추가하기</InputButton>
    </InputForm>
  );
};

export default Input;

const InputForm = styled.form`
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: #e6e6e6;
  padding: 20px;
  border-radius: 10px;
`;

const InputContainer = styled.div`
  align-items: center;
  display: flex;
`;

const InputInput = styled.input`
  border: none;
  border-radius: 10px;
  padding: 10px 10px;
  margin-right: 20px;
  margin-left: 10px;
`;

const InputButton = styled.button`
  background-color: #fff200;
  color: #242424;
  border: none;
  border-radius: 10px;
  padding: 10px 50px;
  font-weight: 700;
  cursor: pointer;
`;
