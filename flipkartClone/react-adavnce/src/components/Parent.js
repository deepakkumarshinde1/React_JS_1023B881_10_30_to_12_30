import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(3);

  return (
    <>
      <h1>COunt1: {count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>Count1</button>
      <button onClick={() => setCount2(count2 + 1)}>Count2</button>
      <Child count2={count2} />
    </>
  );
};

export default Parent;
