import React from 'react'
import {render} from '@testing-library/react'
// import { screen } from '@testing-library/dom'

import '@testing-library/jest-dom/extend-expect'
import NavBar from './NavBar'
import BookContextProvider from "contexts/BookContext";



describe('NavBar', () => {
  describe('Layout', () => {


    it('has heading of Reading list', () => {
      const {container} = render(
        <BookContextProvider>
          <NavBar />
        </BookContextProvider>
      )
      const header = container.querySelector('h1')

      expect(header).toHaveTextContent('Reading list')
    })

    it('has an emoji 😕 if no books is available', () => {

      const {container} = render(
        <BookContextProvider>
          <NavBar />
        </BookContextProvider>
      )
      const emoji = container.querySelector('span')

      expect(emoji).toHaveTextContent('😕')
    })

    it('has text of You have 2 books', () => {
      const  value = { books: [{}, {}], dispatch: () => {} }
      const {container} = render(
        <BookContextProvider value={value}>
          <NavBar />
        </BookContextProvider>
      )
      const paragraphText = container.querySelector('p')

      expect(paragraphText).toHaveTextContent('You have 2 books')
    })
  })
})
