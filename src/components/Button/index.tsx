import React, { FC } from "react";
import "./Button.scss";

interface Props {
  onAddTodo: () => void;
}

const Button: FC<Props> = (props) => {
  const { onAddTodo } = props;

  return (
    <button type="button" className="todo_button" onClick={() => onAddTodo()}>
      Add
    </button>
  );
};

export default Button;
