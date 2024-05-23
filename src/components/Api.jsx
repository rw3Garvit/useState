import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Api = () => {
  const [data, setdata] = useState([]);
  const [view, setview] = useState({});

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

  //delete user

  function deleteUser(id) {
    console.log(id);

    axios.delete(`http://localhost:3001/users/${id}`);
    setdata(data.filter((val) => val.id != id));
  }

  //update

  function viewData(user) {
    console.log(user);
    setview(user);
  }

  function handleView(e) {
    setview({ ...view, [e.target.name]: e.target.value });
  }

  async function updateUser() {
    let res = await axios.put(`http://localhost:3001/users/${view.id}`, view);
    console.log(res);

    setdata(
      data.map((val, index) => (val.id == res.data.id ? { ...view } : val))
    );
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
      <br />
      <br />
      <br />
      <br />
      <br />

      <input
        type="text"
        name="firstname"
        value={view.firstname}
        onChange={handleView}
      />
      <input
        type="text"
        name="lastname"
        value={view.lastname}
        onChange={handleView}
      />
      <input type="number" name="age" value={view.age} onChange={handleView} />
      <input
        type="text"
        name="email"
        value={view.email}
        onChange={handleView}
      />
      <input
        type="text"
        name="password"
        value={view.password}
        onChange={handleView}
      />
      <button onClick={updateUser}>update</button>

      {data.map((val, index) => {
        return (
          <React.Fragment key={index}>
            <p>{val.id}</p>
            <h1>{val.firstname}</h1>
            <h1>{val.lastname}</h1>
            <h1>{val.email}</h1>
            <button onClick={() => deleteUser(val.id)}>Delete</button>
            <button onClick={() => viewData(val)}>View</button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Api;
