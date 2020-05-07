import React, { useContext } from "react";
import { BookContext } from "contexts/BookContext";
import styled from "styled-components";

const BookInfo = styled.li`
  background-color: #6d3d6d;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;

  &:hover {
    opacity: 0.7;
    text-decoration: line-through;
  }
`;

const BookTitle = styled.div`
  font-weight: bold;
  color: #fff;
  font-size: 1.2rem;
`;

const BookAuthor = styled.div`
  font-size: 0.9rem;
  color: #ddd;
`;

const BookDetails = (props) => {
  const { book } = props;
  const { removeBook } = useContext(BookContext);

  return (
    <BookInfo onClick={() => removeBook(book.id)}>
      <BookTitle>{book.title}</BookTitle>
      <BookAuthor>{book.author}</BookAuthor>
    </BookInfo>
  );
};

export default BookDetails;
