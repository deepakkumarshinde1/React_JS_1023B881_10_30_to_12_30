import { useReducer } from "react";
import {
  CounterActions,
  CounterInitialState,
  CounterReducer,
} from "../reducers/counter.reducer";

const Counters = () => {
  let [state, dispatch] = useReducer(CounterReducer, CounterInitialState);

  let handelCount1 = () => {
    dispatch({ type: CounterActions.COUNT_1 });
  };

  let handelCount2 = () => {
    dispatch({ type: CounterActions.COUNT_2 });
  };
  return (
    <>
      <h1>Count-1 {state.count1}</h1>
      <h1>Count-2 {state.count2}</h1>
      <h1>Count-3 {state.count3}</h1>
      <button onClick={handelCount1}>Count1</button>
      <button onClick={handelCount2}>Count2</button>
    </>
  );
};

export default Counters;
