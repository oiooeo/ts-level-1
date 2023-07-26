import React from "react";

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
    <button
      onClick={() => clickDeleteButtonHandler(item.id)}
      className="deleteBtn"
    >
      {children}
    </button>
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
    <button
      onClick={() => clickUpdateButtonHandler(item.id)}
      className="updateBtn"
    >
      {children}
    </button>
  );
};
