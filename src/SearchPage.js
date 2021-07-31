import React, { useState } from "react";

import { Link } from "react-router-dom";

const SearchPage = () => {
  const [queryParam, setQueryParam] = useState("");

  const handleChange = (e) => {
    setQueryParam(e.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={queryParam}
            onChange={handleChange}
            placeholder="Search by title or author"
          />
        </div>
      </div>
      <div className="search-books-results">
        <p>{queryParam}</p>
        <ol className="books-grid" />
      </div>
    </div>
  );
};
export default SearchPage;
