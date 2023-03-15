import React, { FC, KeyboardEvent } from "react";
import CloseIcon from "../../assets/close.svg";
import DoubleTickIcon from "../../assets/double-tick.svg";
import EditIcon from "../../assets/edit.svg";
import UndoIcon from "../../assets/undo.svg";
import { Todo, TodoCard } from "../../interfaces/TodoInterface";
import "./Card.scss";

interface Props extends TodoCard {
  todoItem: Todo;
  onEditText: (e: KeyboardEvent<HTMLTextAreaElement>, todoItem: Todo) => void;
}

const Card: FC<Props> = (props) => {
  const { todoItem, onClose, onEdit, onUndo, onDone, onEditText } = props;
  const getText = (str: string) => {
    if (str.length > 90) {
      let subStringText = str.substr(0, 90);
      return `${subStringText} ...`;
    } else {
      return str;
    }
  };
  return (
    <div className="todo__card">
      {!todoItem.isEdit ? (
        <div
          className={`todo__text ${todoItem.isDone ? "todo__text__done" : ""}`}
        >
          {getText(todoItem.text)}
        </div>
      ) : (
        <textarea
          className="todo__text todo__text__edit"
          onKeyPress={(e) => onEditText(e, todoItem)}
          defaultValue={getText(todoItem.text)}
          autoFocus
        ></textarea>
      )}
      <div className="todo__icon-container">
        {todoItem.isDone ? (
          <span
            className="todo__icon todo__icon__undo"
            title="undo"
            onClick={() => onUndo(todoItem)}
          >
            <img src={UndoIcon} alt="undo" />
          </span>
        ) : (
          <>
            <span
              className="todo__icon todo__icon__edit"
              title="edit"
              onClick={() => onEdit(todoItem)}
            >
              <img src={EditIcon} alt="edit" />
            </span>
            {!todoItem.isEdit && (
              <span
                className="todo__icon todo__icon__double-tick"
                title="done"
                onClick={() => onDone(todoItem)}
              >
                <img src={DoubleTickIcon} alt="done" />
              </span>
            )}
          </>
        )}
        <span
          className="todo__icon todo__icon__close"
          title="close"
          onClick={() => onClose(todoItem)}
        >
          <img src={CloseIcon} alt="close" />
        </span>
      </div>
    </div>
  );
};

export default Card;
