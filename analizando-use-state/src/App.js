import { useState } from "react";
function App() {
  const [name, setName] = useState("Miguel");
  const [age] = useState();
  //const [, setSomething] = useState("Hey1");

  const handleHeyClick = () => {
    setName("Angel");
  };

  return (
    <div className="App">
      <h2> Hola {name}</h2>
      <p>{age}</p>
      <button onClick={handleHeyClick}>Hey</button>
    </div>
  );
}

export default App;
