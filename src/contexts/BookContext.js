import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: uuidv4(), title: "Title of book 01", author: "Some author" },
    { id: uuidv4(), title: "Title of book 02", author: "Some author" },
    { id: uuidv4(), title: "Title of book 03", author: "Some author" },
    { id: uuidv4(), title: "Title of book 04", author: "Some author" },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  };

  const removeBook = (id) => {
    const newListOfBooks = books.filter((book) => book.id !== id);
    setBooks(newListOfBooks);
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
