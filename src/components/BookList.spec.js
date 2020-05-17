import React from 'react'
import {render} from '@testing-library/react'
import BookList from './BookList'
import BookContextProvider from 'contexts/BookContext'

describe('BookList', () => {
  describe('Layout', () => {
    it('show text No books to read when dont have books', () => {
      const {queryByText} = render(
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
      )
      expect(queryByText('No books to read')).toBeInTheDocument()
    })
  })
})
