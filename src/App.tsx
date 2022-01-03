import React, { useEffect, useState } from "react";
import Home from "./Home";
import SearchPage from "./SearchPage";
import { Route } from "react-router-dom";

import "./App.css";
import { getAll } from "./BooksAPI";

export interface IBook {
  shelf: "currentlyReading" | "wantToRead" | "read";
  title: string;
  authors: string[];
  id: string;
  imageLinks: { smallThumbnail: string; largeThumbnail: string };
}
interface IBooksByShelf {
  currentlyReading?: IBook[];
  wantToRead?: IBook[];
  read?: IBook[];
}

const BooksApp = () => {
  const shelves = ["currentlyReading", "wantToRead", "read"];
  const [books, setBooks] = useState<IBook[]>([]);

  const getBooks = async () => {
    const data = await getAll();
    sortBooksByShelf(data);
  };

  const sortBooksByShelf = (data: IBook[]) => {
    setBooks(data);
    const booksByShelf: IBooksByShelf = {};
    data.forEach((book) => {
      if (booksByShelf[book.shelf]) {
        //@ts-ignore
        booksByShelf[book.shelf].push(book);
      } else {
        booksByShelf[book.shelf] = [book];
      }
    });
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div className="app">
      <Route exact path="/">
        <Home books={books} getBooks={getBooks} shelves={shelves} />
      </Route>
      <Route path="/searchbooks">
        <SearchPage shelves={shelves} getBooks={getBooks} books={[]} />
      </Route>
    </div>
  );
};

export default BooksApp;
