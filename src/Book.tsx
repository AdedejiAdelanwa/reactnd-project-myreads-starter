import React from "react";
import { update } from "./BooksAPI";
import { IBook } from "./App";

interface IProps {
  book: IBook;
  shelves: string[];
  getBooks: Function;
}

const Book: React.FC<IProps> = ({ book, shelves, getBooks }) => {
  const smallThumbnail =
    book && book.imageLinks && book.imageLinks.smallThumbnail;
  const authors = book && book.authors;
  const moveBook = async (e: React.ChangeEvent<HTMLSelectElement>) => {
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
            backgroundImage: `url("${smallThumbnail}")`,
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
      <div className="book-authors">{authors}</div>
    </div>
  );
};

export default Book;
