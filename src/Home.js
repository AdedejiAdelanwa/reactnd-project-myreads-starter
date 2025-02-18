import React from "react";
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
export default Home;
