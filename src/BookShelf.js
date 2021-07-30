import React from "react";
import Book from "./Book";

const BookShelf = ({ shelf, shelves, books, moveBook, shelfOption }) => {
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
                <Book
                  book={book}
                  shelf={shelf}
                  shelves={shelves}
                  moveBook={moveBook}
                  shelfOption={shelfOption}
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};
export default BookShelf;
