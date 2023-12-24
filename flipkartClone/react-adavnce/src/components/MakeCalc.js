import { useCallback, useMemo, useState } from "react";
import Count3 from "./Count3";
const MakeCalc = () => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(5);
  let [count3, setCount3] = useState(7);

  let isEventOrOdd1 = useMemo(() => {
    console.log("even 1");
    return count1 % 2 == 0 ? "Even" : "Odd";
  }, [count1]);

  let isEventOrOdd2 = useMemo(() => {
    console.log("even 2");
    return count2 % 2 == 0 ? "Even" : "Odd";
  }, [count2]);

  let isEventOrOdd3 = useMemo(() => {
    console.log("even 3");
    return count3 % 2 == 0 ? "Even" : "Odd";
  }, [count3]);

  let inc1 = () => {
    setCount1(count1 + 1);
  };
  let inc2 = () => {
    setCount2(count2 + 2.5);
  };
  let inc3 = useCallback(() => {
    setCount3(Math.ceil(count3 + 1));
  }, [count3]);

  return (
    <>
      <p>
        {count1} : {isEventOrOdd1}
      </p>
      <button onClick={inc1}>Inc 1</button>
      <p>
        {count2} : {isEventOrOdd2}
      </p>
      <button onClick={inc2}>Inc 2</button>
      <Count3 count3={count3} isEventOrOdd3={isEventOrOdd3} inc3={inc3} />
    </>
  );
};

export default MakeCalc;
