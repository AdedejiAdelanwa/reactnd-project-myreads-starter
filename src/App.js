import React, { useState } from "react";
import Home from "./Home";
import SearchPage from "./SearchPage";
import { Route } from "react-router-dom";

import "./App.css";

const BooksApp = () => {
  const [shelves, setShelves] = useState([]);
  return (
    <div className="app">
      <Route exact path="/">
        <Home shelves={shelves} setShelves={setShelves} />
      </Route>
      <Route path="/searchbooks">
        <SearchPage shelves={shelves} />
      </Route>
    </div>
  );
};

export default BooksApp;
