import { useState } from "react";

const App = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const handleLoginClick = () => {
    setIsLogged(true);
  };
  return (
    <div>
      <label>
        User
        <input
          value={user}
          onChange={({ target: { value } }) => setUser(value)}
        ></input>
      </label>
      <br></br>
      <br></br>
      <label>
        Password
        <input
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        ></input>
      </label>
      <br></br>
      <br></br>
      <button onClick={handleLoginClick}>Inicias sesion</button>

      {isLogged && <h2>Logeado correctamente</h2>}
    </div>
  );
};

export default App;
