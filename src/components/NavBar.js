import React, { useContext } from "react";
import { BookContext } from "contexts/BookContext";
import styled from "styled-components";

const Container = styled.nav`
  padding: 10px 20px;
  text-align: center;
  background: #6d3d6d;

  h1 {
    margin: 10px 0;
  }
`;

const Emoji = styled.span.attrs({
  role:"img",
  ariaLabel:"Sad"
})`
  font-size: 60px;
  vertical-align: middle;
  line-height: 2;
`;

const NavBar = () => {
  const { books } = useContext(BookContext);

  return (
    <Container>
      <h1>Reading list</h1>
      {books.length > 0 ? (
        <p>You have {books.length} books</p>
      ) : (
        <Emoji>
          😕
        </Emoji>
      )}
    </Container>
  );
};

export default NavBar;
