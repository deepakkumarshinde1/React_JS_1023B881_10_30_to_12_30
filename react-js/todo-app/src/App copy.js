import { useState } from "react";
import Text from "./components/Text";

let App = () => {
  let [text, setText] = useState("Welcome to 3ri tech"); // string , number , boolean , [] , {}
  // always returns [ value , setValue]
  // setValue ==> reactDispatchMethod

  // arrow function
  let changeText = () => {
    setText("Its awesome");
  };
  return (
    <>
      <Text text={text} name="deepak" />
      <button onClick={changeText}>Change Text</button>
    </>
  );
};

// export
export default App;
