import React, { useState } from "react";

const Test = () => {
  const [input, setinput] = useState({});

  function handle(e) {
    setinput({ ...input, [e.target.name]: e.target.value });
  }

  

  function submit() {
    console.log(input);
  }

  return (
    <div>
      <input type="text" name="firstname" onChange={handle} />
      <input type="text" name="lastname" onChange={handle} />
      <input type="text" name="email" onChange={handle} />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Test;
