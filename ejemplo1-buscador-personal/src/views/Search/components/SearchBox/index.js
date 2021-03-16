import { useState } from "react";
export default function SearchBox() {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      Buscador de personal
      <label>
        <input
          value={searchText}
          onChange={({ target: value }) => setSearchText(value)}
        ></input>
      </label>
      <button>Buscar</button>
    </div>
  );
}
