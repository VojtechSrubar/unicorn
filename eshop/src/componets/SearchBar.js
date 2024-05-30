import React from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import SearchContext from "../context/SearchContext";
import { useContext } from "react";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); // Update search term on input change (lowercase for case-insensitive search)
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        // **Key change:** Remove the `value` attribute here
        onChange={handleSearchChange}
      />
      <button type="button">
        <SearchIcon />
      </button>
    </div>
  );
}
