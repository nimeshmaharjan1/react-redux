import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";
function App() {
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const resetValue = () => {
    dispatch(reset());
    setIncrementAmount(0);
    console.log("value reset");
  };
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={resetValue}>Reset</button>
      </div>
    </div>
  );
}

export default App;
