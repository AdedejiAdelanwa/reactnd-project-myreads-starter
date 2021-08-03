import React, { useEffect, useState } from "react";
import Home from "./Home";
import SearchPage from "./SearchPage";
import { Route } from "react-router-dom";

import "./App.css";
import { getAll } from "./BooksAPI";

const BooksApp = () => {
  const [shelves, setShelves] = useState([]);
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const data = await getAll();

    sortBooksByShelf(data);
    saveToSession(data);
  };

  const saveToSession = (data) => {
    const sessionBooks = {};
    data.map((book) => (sessionBooks[book.id] = book));

    const stringifyBooks = JSON.stringify(sessionBooks);
    sessionStorage.setItem("sessionBooks", stringifyBooks);
  };

  const sortBooksByShelf = (data) => {
    setBooks(data);
    const booksByShelf = {};
    data.forEach((book) => {
      if (booksByShelf[book.shelf]) {
        booksByShelf[book.shelf].push(book);
      } else {
        booksByShelf[book.shelf] = [book];
      }
    });

    setShelves(Object.keys(booksByShelf));
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
        <SearchPage shelves={shelves} getBooks={getBooks} />
      </Route>
    </div>
  );
};

export default BooksApp;
