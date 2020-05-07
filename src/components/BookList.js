import React, { useContext } from "react";
import { BookContext } from "contexts/BookContext";
import styled from "styled-components";
import BookDetails from "./BookDetails";

const Container = styled.div`
  padding: 20px;
  margin-bottom: 20px;

  ul {
    padding: 0;
    list-style: none;

    li {
      padding: 10px;
      margin: 10px auto;
      border-radius: 10px;
    }
  }
`;

const Info = styled.div`
  padding: 20px;
  text-align: center;
`;

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <Container>
      <ul>
        {books.map((book) => (
          <BookDetails book={book} key={book.id} />
        ))}
      </ul>
    </Container>
  ) : (
    <Info>No books to read</Info>
  );
};

export default BookList;
