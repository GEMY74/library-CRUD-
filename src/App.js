import React, { useState } from "react";

import Header from "./components/header/Header";
import AddBook from "./components/addbook/AddBook";
import BookList from "./components/booklist/BookList";

function App() {
  const getBookIdHandler = (id) => {
    setBookId(id);
  };

  const [bookId, setBookId] = useState("");

  return (
    <div>
      <Header />
      <AddBook id={bookId} setBookId={setBookId} />
      <BookList getBookId={getBookIdHandler} />
    </div>
  );
}

export default App;
