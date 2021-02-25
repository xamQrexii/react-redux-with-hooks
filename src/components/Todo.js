import { useDispatch, useSelector } from "react-redux";
import { getTodoMiddleware } from "../store/middlewares/todoMiddlewares";
import { bindActionCreators } from "redux";

const Todo = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const todoMiddleWare = bindActionCreators(getTodoMiddleware, dispatch);
  return (
    <div>
      {todo.loading && <p>Loading...</p>}
      {todo.error && <p>{todo.error}</p>}
      {todo.todo && <p>{todo.todo.title}</p>}
      <div>
        <button
          disabled={todo.loading ? true : false}
          onClick={() => todoMiddleWare(3)}
        >
          Get Todo
        </button>
      </div>
    </div>
  );
};

export default Todo;
