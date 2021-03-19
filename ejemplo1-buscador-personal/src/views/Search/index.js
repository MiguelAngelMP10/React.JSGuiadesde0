import SearchBox from "./components/SearchBox";
import { useState } from "react";
import "./style.css";
export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false);
  const handleClaseOpenSearch = () => {
    setIsAtTop(!isAtTop);
  };

  return (
    <div className={`search ${isAtTop ? "search--top" : "search--center"} `}>
      <SearchBox
        onSearch={handleClaseOpenSearch}
        onClose={handleClaseOpenSearch}
      ></SearchBox>
    </div>
  );
}
