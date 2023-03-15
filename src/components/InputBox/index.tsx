import React, { FC, ChangeEvent } from "react";
import "./InputBox.scss";

interface Props {
  className: string;
  onAddTodo: (val: string) => void;
  val: string;
}

const InputBox: FC<Props> = (props) => {
  const { className, onAddTodo, val } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onAddTodo(e.target.value);
  };

  return (
    <div className={`input__container ${className}`}>
      <label htmlFor="texyfield">Add Todo</label>
      <input
        type="text"
        id="texyfield"
        value={val}
        placeholder="Add new todo"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default InputBox;
