import React from "react";
import { update } from "./BooksAPI";
const Book = ({ book, shelves, getBooks }) => {
  const moveBook = async (e) => {
    // e.preventDefault();
    try {
      const updated = await update(book, e.target.value);
      updated && getBooks && getBooks();
    } catch (error) {}
  };
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
          <select value={book.shelf || "none"} onChange={moveBook}>
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
