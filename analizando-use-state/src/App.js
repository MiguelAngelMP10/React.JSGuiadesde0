import { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  // componentDidUpdate
  useEffect(() => {
    console.log("div update effect");
  });

  // componentDidMount
  useEffect(() => {
    console.log("Did Mount effect");
  }, []);

  useEffect(() => {
    console.log("name cambio");
  }, [name]);

  useEffect(() => {
    console.log("age cambio");
  }, [age]);
  return (
    <div>
      <input
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      ></input>
      <br></br>
      <input
        value={age}
        onChange={({ target: { value } }) => setAge(value)}
      ></input>
    </div>
  );
};

export default App;
