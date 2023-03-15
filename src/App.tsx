import React, { FC, useState } from "react";
import InputBox from "../src/components/InputBox";
import Button from "../src/components/Button";
import CardList from "../src/components/CardList";
import { Todo } from "../src/interfaces/TodoInterface";
import "./App.scss";

const App: FC = () => {
  const [inputVal, setinputVal] = useState<string>("");
  const [cardList, setCardList] = useState<Todo[]>([]);

  const addTodo = () => {
    if (inputVal.length > 0) {
      const todoObj = {
        id: Date.now(),
        text: inputVal,
        isDone: false,
        isEdit: false,
      };
      setCardList([...cardList, todoObj]);
      setinputVal("");
    }
  };

  const onClose = (todoItem: Todo) => {
    let updatedCardList = cardList.filter((item) => item.id !== todoItem.id);
    setCardList(updatedCardList);
  };

  const onEdit = (todoItem: Todo) => {
    let updatedCardList = cardList.map((item) => {
      if (item.id === todoItem.id) {
        return { ...item, isEdit: true };
      } else {
        return item;
      }
    });
    setCardList(updatedCardList);
  };

  const onUndo = (todoItem: Todo) => {
    let updatedCardList = cardList.map((item) => {
      if (item.id === todoItem.id) {
        return { ...item, isDone: false };
      } else {
        return item;
      }
    });

    setCardList(updatedCardList);
  };

  const onDone = (todoItem: Todo) => {
    let updatedCardList = cardList.map((item) => {
      if (item.id === todoItem.id) {
        return { ...item, isDone: true };
      } else {
        return item;
      }
    });
    setCardList(updatedCardList);
  };

  const onEditText = (event: any, todoItem: Todo) => {
    // let key = event.keyCode;
    if (event.key === "Enter") {
      let updatedCardList = cardList.map((item) => {
        if (item.id === todoItem.id) {
          return { ...item, isEdit: false, text: event.target.value };
        } else {
          return item;
        }
      });
      setCardList(updatedCardList);
    }
  };

  return (
    <div className="todo">
      <div className="todo__container">
        <h1 className="">Todo App (ReactJs Typescript)</h1>
        <div className="">
          <InputBox
            className=""
            val={inputVal}
            onAddTodo={(val) => setinputVal(val)}
          />
          <Button onAddTodo={addTodo} />
        </div>
        <div className="">
          <CardList
            list={cardList}
            onClose={onClose}
            onEdit={onEdit}
            onUndo={onUndo}
            onDone={onDone}
            onEditText={onEditText}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
