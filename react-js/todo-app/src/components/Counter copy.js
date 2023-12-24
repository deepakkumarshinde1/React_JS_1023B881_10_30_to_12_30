import { useState } from "react";

let Counter = () => {
  let [count, setCount] = useState(10);

  let inc = () => {
    setCount(count + 1);
  };

  let dec = () => {
    setCount(count - 1);
  };
  return (
    <>
      <center>
        <h1>{count}</h1>
        <button onClick={inc}>Inc</button>
        <button onClick={dec}>Dec</button>
      </center>
    </>
  );
};

export default Counter;
