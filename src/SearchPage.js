import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { search } from "./BooksAPI";
import { Link } from "react-router-dom";
import Book from "./Book";
import validSearchTerms from "./validSearchTerms";

const SearchPage = ({ shelves, getBooks }) => {
  const [queryParam, setQueryParam] = useState("");
  const [searchedBooks, setSearchBooks] = useState([]);

  const debounceQuery = useCallback(
    debounce((newValue) => {
      try {
        if (newValue && validSearchTerms.includes(newValue.toLowerCase())) {
          search(newValue).then((res) => {
            setSearchBooks(res);
          });
        } else {
          setSearchBooks([]);
        }
      } catch (error) {}
    }, 1000),
    []
  );

  const handleChange = (e) => {
    const { value: newValue } = e.target;
    setQueryParam(newValue);
    debounceQuery(newValue);
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
        <ol className="books-grid">
          {searchedBooks &&
            searchedBooks.map((book) => (
              <li key={book.id}>
                <Book getBooks={getBooks} shelves={shelves} book={book} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};
export default SearchPage;
