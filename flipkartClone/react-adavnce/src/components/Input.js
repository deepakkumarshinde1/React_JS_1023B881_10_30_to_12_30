import { useRef, useState } from "react";

const Input = () => {
  let inputRef = useRef("");
  let [showText, setShowText] = useState("");
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={() => setShowText(inputRef.current.value)}>
        Show Text
      </button>
      <h1>{showText}</h1>
    </>
  );
};

export default Input;
