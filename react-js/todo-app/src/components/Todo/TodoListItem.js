import { useTodoContext } from "../../context/todo.context";

const TodoListItem = ({ todo, index }) => {
  let { markAsCompleted, removeItem } = useTodoContext();
  return (
    <>
      <>
        {todo.isCompleted === true ? (
          <li className="list-group-item bg-body-tertiary">
            <input type="checkbox" value="" checked={true} disabled={true} />
            <span className="ms-2 text-decoration-line-through">
              {todo.name}
            </span>
          </li>
        ) : (
          <li
            className="list-group-item bg-body-secondary"
            onDoubleClick={() => removeItem(index)}
          >
            <input
              type="checkbox"
              value=""
              checked={false}
              disabled={false}
              onChange={() => markAsCompleted(index)}
            />
            <span className="ms-2">{todo.name}</span>
          </li>
        )}
      </>
    </>
  );
};

export default TodoListItem;
