import { useState } from "react";
import Text from "./components/Text";
import Counter from "./components/Counter";
import TodoList from "./components/Todo/TodoList";
import TodoInput from "./components/Todo/TodoInput";

let App = () => {
  return (
    <>
      <section className="container-fluid">
        <TodoInput />
        <TodoList />
      </section>
    </>
  );
};

// export
export default App;
