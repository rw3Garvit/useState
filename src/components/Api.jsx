import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Api = () => {
  const [data, setdata] = useState([]);

  let firstname = useRef();
  let lastname = useRef();
  let age = useRef();
  let email = useRef();
  let password = useRef();

  //get data
  async function getData() {
    let res = await axios.get("http://localhost:3001/users");

    setdata(res.data);
  }

  //save data
  async function saveData() {
    let user = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      age: age.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    console.log(user);

    let res = await axios.post("http://localhost:3001/users", user);
    console.log(res);

    setdata([...data, res.data]);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <input type="text" ref={firstname} />
      <input type="text" ref={lastname} />
      <input type="number" ref={age} />
      <input type="text" ref={email} />
      <input type="text" ref={password} />
      <button onClick={saveData}>Save</button>

      {data.map((val, index) => {
        return (
          <React.Fragment key={index}>
            <p>{val.id}</p>
            <h1>{val.firstname}</h1>
            <h1>{val.lastname}</h1>
            <h1>{val.email}</h1>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Api;
