import { useTodoContext } from "../../context/todo.context";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  let { todoList } = useTodoContext();
  return (
    <>
      <section className="row">
        <section className="col-6 m-auto">
          <ul className="list-group ">
            {todoList.map((todo, index) => {
              return <TodoListItem key={index} todo={todo} index={index} />;
            })}
          </ul>
        </section>
      </section>
    </>
  );
};

export default TodoList;
