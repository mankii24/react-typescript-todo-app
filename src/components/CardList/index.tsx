import React, { FC, KeyboardEvent } from "react";
import Card from "../Card";
import { Todo, TodoCard } from "../../interfaces/TodoInterface";
import "./CardList.scss";

interface Props extends TodoCard {
  list: Array<Todo>;
  onEditText: (e: KeyboardEvent<HTMLTextAreaElement>, todoItem: Todo) => void;
}

const CardList: FC<Props> = (props) => {
  const { list, onClose, onEdit, onUndo, onDone, onEditText } = props;

  const todoList =
    list &&
    list.length > 0 &&
    list.map((item: Todo) => {
      return (
        <Card
          todoItem={item}
          key={item.id}
          onClose={onClose}
          onEdit={onEdit}
          onUndo={onUndo}
          onDone={onDone}
          onEditText={onEditText}
        />
      );
    });

  return <div className="todo__cards">{todoList}</div>;
};

export default CardList;
