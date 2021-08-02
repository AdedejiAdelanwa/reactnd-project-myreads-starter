import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BookShelf from "./BookShelf";

const Home = ({ books, shelves, getBooks }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <BookShelf
              shelf={shelf}
              books={books}
              shelves={shelves}
              key={shelf}
              className="bookshelf"
              getBooks={getBooks}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/searchbooks">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};
Home.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  getBooks: PropTypes.func.isRequired,
};
export default Home;
