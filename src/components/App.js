import React from "react";
import BookContextProvider from "contexts/BookContext";
import NavBar from "./NavBar";
import styled from "styled-components";
import BookList from "./BookList";

const Container = styled.div`
  background-color: #4c2a4c;
  margin: 20px auto;
  width: 90%;
  max-width: 700px;
  color: #eee;
`;

function App() {
  return (
    <Container>
      <BookContextProvider>
        <NavBar />
        <BookList />
      </BookContextProvider>
    </Container>
  );
}

export default App;
