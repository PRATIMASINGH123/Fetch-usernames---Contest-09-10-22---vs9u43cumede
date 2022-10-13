import React from "react";
import { useState, useEffect } from "react";
const App = () => {
  //code here
  const [name, setName] = useState("");
  const getData = async (id) => {
    const response = await fetch(
      `https://content.newtonschool.co/v1/pr/main/users/${id}`
    );
    const data = await response.json();
    setName(data.name);
  };
  useEffect(() => {
    getData(1);
  }, []);

  const changeInput = (e) => {
    getData(e.target.value);
  };
  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name}</p>
    </div>
  );
};

export default App;
