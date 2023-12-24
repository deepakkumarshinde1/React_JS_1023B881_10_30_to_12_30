import { memo } from "react";

const Child = ({ count2 }) => {
  console.log("Child is rendering ");
  return (
    <>
      <h1>COunt2: {count2}</h1>
    </>
  );
};

export default memo(Child);
