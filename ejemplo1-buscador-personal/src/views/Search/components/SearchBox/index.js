import { useState } from "react";
import "./style.css";

export default function SearchBox({ onSearch, onClose }) {
  const [searchText, setSearchText] = useState("");
  const handleCloseSearch = () => {
    setSearchText("");
    onClose();
  };

  return (
    <div className="search-box">
      <h2 className="search-box-title">Buscador de personal</h2>
      <div className="search-box-buttons">
        <label>
          <input
            value={searchText}
            onChange={({ target: { value } }) => setSearchText(value)}
            className="search-box-input"
          ></input>
        </label>
        <button onClick={() => onSearch(searchText)}>Buscar</button>
        <button onClick={handleCloseSearch}>Cerrar</button>
      </div>
    </div>
  );
}
