import SearchBox from "./components/SearchBox";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import SearchResults from "./components/SearchResults";

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false);
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        /* const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        */

        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers().catch(null);
  }, []);

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
