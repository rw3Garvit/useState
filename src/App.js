import React, { useState } from "react";
import Test from "./components/Test";
import Input from "./components/Input";
import Effect from "./components/Effect";
import Api from "./components/Api";

const App = () => {
  let [count, setcount] = useState(0);

  const [color, setcolor] = useState("red");

  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>-</button>

      <div
        style={{ backgroundColor: `${color}`, width: "250px", height: "250px" }}
      ></div>
      <button onClick={() => setcolor("blue")}>Change</button> */}
      {/* <Test /> */}
      {/* <Input /> */}
      {/* <Effect /> */}
      <Api />
    </div>
  );
};

export default App;
