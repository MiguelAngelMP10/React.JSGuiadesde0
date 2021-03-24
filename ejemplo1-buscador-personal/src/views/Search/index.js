import SearchBox from "./components/SearchBox";
import { useState } from "react";
import data from "../../data/users.json";
import "./style.css";
import SearchResults from "./components/SearchResults";

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false);

  const [results, setResults] = useState([]);
  const handleCloseSearch = () => {
    setIsAtTop(false);
    setResults([]);
  };
  const handleSearchClick = (searchText) => {
    setIsAtTop(true);
    if (data?.length) {
      const seatchTextMinus = searchText.toLowerCase();
      const filterData = data.filter(
        (value) =>
          value.name.toLowerCase().includes(seatchTextMinus) ||
          value.phone.toLowerCase().includes(seatchTextMinus) ||
          value.email.toLowerCase().includes(seatchTextMinus) ||
          value.username.toLowerCase().includes(seatchTextMinus)
      );
      setResults(filterData);
    }
  };

  return (
    <div className={`search ${isAtTop ? "search--top" : "search--center"} `}>
      <SearchBox
        onSearch={handleSearchClick}
        onClose={handleCloseSearch}
        isSearching={isAtTop}
      ></SearchBox>
      <SearchResults results={results} isSearching={isAtTop}></SearchResults>
    </div>
  );
}
