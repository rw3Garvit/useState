import React, { useRef } from "react";

const Input = () => {
  let email = useRef();
  let password = useRef();

  function handleSubmit(e) {
    let data = {
      email: email.current.value,
      password: password.current.value,
    };

    console.log(data);
  }

  return (
    <div>
      <input type="text" ref={email} />
      <input type="text" ref={password} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Input;
