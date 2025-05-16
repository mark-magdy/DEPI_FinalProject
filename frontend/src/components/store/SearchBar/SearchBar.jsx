import React from 'react';
import "./SearchBar.css";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
        className="search-bar"
      placeholder="Search products by name..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}  // Handle input change
    />
  );
};

export default SearchBar;
