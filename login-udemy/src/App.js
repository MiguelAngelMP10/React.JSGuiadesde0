import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };
  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleFormSubmit = (event) => {
    console.log("submit");
    event.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h2>Iniciar Sesión</h2>
        <label>
          Correo
          <input type="email" alue={email} onChange={handleEmailChange}></input>
        </label>
        <label>
          Contraseña
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default App;
