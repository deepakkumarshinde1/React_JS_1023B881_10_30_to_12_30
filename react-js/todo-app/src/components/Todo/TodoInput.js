import { useTodoContext } from "../../context/todo.context";

const TodoInput = () => {
  let { saveTodoItem, inputChange, inputText, checkForEnter } =
    useTodoContext();
  return (
    <>
      <section className="row">
        <section className="col-4 m-auto pt-3">
          <p className="text-center fs-4 fw-bold text-primary">
            Todo Application
          </p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Todo"
              value={inputText}
              onChange={inputChange}
              onKeyUp={checkForEnter}
            />
            <span
              className="input-group-text btn btn-success"
              id="basic-addon1"
              onClick={saveTodoItem}
            >
              <span className="fa fa-save"></span>
            </span>
          </div>
        </section>
      </section>
    </>
  );
};

export default TodoInput;
