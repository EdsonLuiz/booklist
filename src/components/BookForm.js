import React, { useContext, useState } from "react";
import { BookContext } from "contexts/BookContext";
import styled from "styled-components";

const Form = styled.form`
  padding: 20px;

  input[type="text"] {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: none;
    margin: 6px 0;
    background-color: #3c1f3c;
    color: #fff;
    border: 0;
  }

  input[type="submit"] {
    margin: 10px auto;
    background-color: #eee;
    border: none;
    padding: 6px 20px;
    display: block;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 900;
  }
`;

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        type="text"
      />

      <input
        placeholder="Book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        type="text"
      />

      <input type="submit" value="Add new book" />
    </Form>
  );
};

export default BookForm;
