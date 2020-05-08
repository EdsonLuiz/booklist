import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { bookReducer } from "reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [
    { id: uuidv4(), title: "Title of book 01", author: "Some author" },
    { id: uuidv4(), title: "Title of book 02", author: "Some author" },
    { id: uuidv4(), title: "Title of book 03", author: "Some author" },
    { id: uuidv4(), title: "Title of book 04", author: "Some author" },
  ]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
