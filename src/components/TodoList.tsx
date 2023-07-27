import React from "react";
import { DeleteButton, UpdateButton } from "./Buttons";
import styled from "styled-components";

interface Todo {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
}

interface TodoListProps {
  todoList: Todo[];
  setTodoList: any;
}

const TodoList: React.FC<TodoListProps> = ({ todoList, setTodoList }) => {
  const clickDeleteButtonHandler = (id: number) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
    localStorage.setItem("todoItem", JSON.stringify(newTodoList));
  };

  const clickUpdateButtonHandler = (id: number) => {
    const updateTodoList = todoList.map((item) => {
      return item.id === id ? { ...item, isDone: !item.isDone } : item;
    });

    setTodoList(updateTodoList);
    localStorage.setItem("todoItem", JSON.stringify(updateTodoList));
  };

  const workingTask = todoList.filter((todoList) => !todoList.isDone);
  const doneTask = todoList.filter((todoList) => todoList.isDone);

  return (
    <div>
      <TodoStatusParagraph>진행중 🔥</TodoStatusParagraph>
      <TodoListContainer>
        {workingTask.map(function (item) {
          return (
            <TodoListItem key={item.id}>
              <TodoTitleParagraph>{item.title}</TodoTitleParagraph>
              <TodoContentParagraph>{item.content}</TodoContentParagraph>
              <br />
              <DeleteButton
                item={item}
                clickDeleteButtonHandler={clickDeleteButtonHandler}
              >
                삭제
              </DeleteButton>
              <UpdateButton
                item={item}
                clickUpdateButtonHandler={clickUpdateButtonHandler}
              >
                완료
              </UpdateButton>
            </TodoListItem>
          );
        })}
      </TodoListContainer>
      <TodoStatusParagraph>완료 ✨</TodoStatusParagraph>
      <TodoListContainer>
        {doneTask.map(function (item) {
          return (
            <TodoListItem key={item.id}>
              <TodoTitleParagraph>{item.title}</TodoTitleParagraph>
              <TodoContentParagraph>{item.content}</TodoContentParagraph>
              <br />
              <DeleteButton
                item={item}
                clickDeleteButtonHandler={clickDeleteButtonHandler}
              >
                삭제
              </DeleteButton>
              <UpdateButton
                item={item}
                clickUpdateButtonHandler={clickUpdateButtonHandler}
              >
                취소
              </UpdateButton>
            </TodoListItem>
          );
        })}
      </TodoListContainer>
    </div>
  );
};

export default TodoList;

const TodoStatusParagraph = styled.p`
  font-size: 27px;
  padding-left: 10px;
  border-top: 0.3px solid #aeaeae;
  padding-top: 10px;
  font-weight: 700;
`;

const TodoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TodoListItem = styled.div`
  width: 270px;
  padding: 5px 10px 15px 15px;
  border: 3px solid #aeaeae;
  border-radius: 10px;
  margin: 10px;
`;

const TodoTitleParagraph = styled.p`
  font-size: 25px;
`;
const TodoContentParagraph = styled.p`
  font-size: 18px;
`;
