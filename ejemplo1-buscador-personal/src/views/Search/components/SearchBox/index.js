import { useState } from "react";
import "./style.css";

export default function SearchBox({ onSearch, onClose, isSearching }) {
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
        <button
          onClick={() => onSearch(searchText)}
          disabled={!searchText.length}
        >
          Buscar
        </button>
        {isSearching && (
          <button onClick={handleCloseSearch} disabled={!searchText.length}>
            Cerrar
          </button>
        )}
      </div>
    </div>
  );
}
