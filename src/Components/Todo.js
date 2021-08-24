import React, { useState } from "react";
import "../Components/Todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../action/Index";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>redux crud</h1>
      <div className="addItem">
        <input
          placeholder="add item"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={() => dispatch(addTodo(inputData), setInputData(""))}>
          add
        </button>
      </div>
      <div className="showItems">
        <div>
          {list.map((elem) => {
            return (
              <div key={elem.id}>
                <h1> {elem.data} </h1>
                <button onClick={() => dispatch(deleteTodo(elem.id))}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
