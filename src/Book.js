import React from "react";
const Book = ({ book, shelf, shelves, moveBook, shelfOption }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${book.imageLinks.smallThumbnail}")`,
          }}
        />
        <div className="book-shelf-changer">
          <select
            // defaultValue={book.shelf}
            value={book.shelf}
            onChange={(e) => moveBook(e, book, book.shelf)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            {shelves.map((shelf) => (
              <option key={shelf} value={shelf}>
                {shelf}
              </option>
            ))}
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};
export default Book;
