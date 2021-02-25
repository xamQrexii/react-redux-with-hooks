import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store/actions/countActions";

import Todo from "./components/Todo";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>REDUX</h1>
      <h3>{state.count.value}</h3>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <Todo />
    </div>
  );
}

export default App;
