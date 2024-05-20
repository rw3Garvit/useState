import React, { useState } from "react";

const Test = () => {
  const [input, setinput] = useState({});

  //   function handle(e) {
  //     setinput(e.target.value);
  //   }

  function submit() {
    let data = {
      name: input,
    };

    console.log(data);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setinput(e.target.value)} />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Test;
