import { createContext, useContext, useState } from "react";

// create context --> create a context instance
let TodoContext = createContext({});

// create a provider --> make a attached  resource to index file and it will have a logic
export const TodoContextProvider = (props) => {
  let [inputText, setInputText] = useState("");
  let [todoList, setTodoList] = useState([]);
  let saveTodoItem = () => {
    // add todo to list
    if (inputText !== "") {
      let newTodo = {
        isCompleted: false,
        name: inputText,
      };
      todoList.unshift(newTodo);

      setTodoList([...todoList]);
      alert("Todo Saved Successfully.");
      setInputText("");
    }
  };

  let inputChange = (event) => {
    setInputText(event.target.value);
  };

  let markAsCompleted = (index) => {
    console.log("checkbox ", index);
    todoList[index].isCompleted = true;
    setTodoList([...todoList]);
  };

  let removeItem = (index) => {
    // remove data from array
    todoList.splice(index, 1);
    setTodoList([...todoList]);
    alert("Todo Removed Successfully");
  };

  let checkForEnter = (event) => {
    if (event.keyCode === 13) {
      saveTodoItem();
    }
  };
  // share it
  let shareValues = {
    saveTodoItem,
    inputChange,
    inputText,
    todoList,
    markAsCompleted,
    removeItem,
    checkForEnter,
  };
  return (
    <>
      <TodoContext.Provider value={shareValues}>
        {props.children}
      </TodoContext.Provider>
    </>
  );
};

// create a custom hook --> to consume context
export const useTodoContext = () => {
  return useContext(TodoContext);
};
