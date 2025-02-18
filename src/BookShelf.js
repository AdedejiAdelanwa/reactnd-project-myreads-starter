import React from "react";
import Book from "./Book";

const BookShelf = ({ shelf, shelves, books, getBooks }) => {
  return (
    <div key={shelf.id} className="bookshelf">
      <h2 className="bookshelf-title">
        {shelf.charAt(0).toUpperCase() +
          shelf
            .slice(1)
            .split(/(?=[A-Z])/)
            .join(" ")
            .toLowerCase()}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === shelf)
            .map((book) => (
              <li key={book.id}>
                <Book book={book} shelves={shelves} getBooks={getBooks} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};
export default BookShelf;
