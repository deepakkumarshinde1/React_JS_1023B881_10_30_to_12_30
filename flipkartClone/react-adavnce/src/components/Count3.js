import { memo } from "react";

const Count3 = ({ count3, isEventOrOdd3, inc3 }) => {
  console.log("Count3 component");
  return (
    <>
      <p>
        {count3}: {isEventOrOdd3}
      </p>
      <button onClick={inc3}>Inc 3</button>
    </>
  );
};

export default memo(Count3);
