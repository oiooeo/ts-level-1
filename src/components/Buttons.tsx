import React from "react";
import styled from "styled-components";

interface DeleteButtonProps {
  item: { id: number };
  clickDeleteButtonHandler: (id: number) => void;
  children: React.ReactNode;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  item,
  clickDeleteButtonHandler,
  children,
}) => {
  return (
    <StyledDeleteButton onClick={() => clickDeleteButtonHandler(item.id)}>
      {children}
    </StyledDeleteButton>
  );
};

interface UpdateButtonProps {
  item: { id: number };
  clickUpdateButtonHandler: (id: number) => void;
  children: React.ReactNode;
}

export const UpdateButton: React.FC<UpdateButtonProps> = ({
  item,
  clickUpdateButtonHandler,
  children,
}) => {
  return (
    <StyledUpdateButton onClick={() => clickUpdateButtonHandler(item.id)}>
      {children}
    </StyledUpdateButton>
  );
};

const StyledDeleteButton = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #ff4848;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  margin: 0px 10px;
  cursor: pointer;
  font-weight: 700;
`;

const StyledUpdateButton = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #60a94d;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  margin: 0px 10px;
  cursor: pointer;
  font-weight: 700;
`;
