import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSelf from './BookSelf'
import BookSearch from './BookSearch'
import { Route } from 'react-router-dom'

const shelves = [
  {
    "value": "currentlyReading",
    "displayText": "Currently Reading",
    "displayOnShelf": true
  },
  {
    "value": "wantToRead",
    "displayText": "Want to Read",
    "displayOnShelf": true
  },
  {
    "value": "read",
    "displayText": "Read",
    "displayOnShelf": true
  },
  {
    "value": "none",
    "displayText": "None",
    "displayOnShelf": false
  }
]


class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false,
    self: 'none'
  }

  changeBookShelf = (selectedBook, newShelf) => {
    this.state.books.forEach((book) => {
      if (book.id === selectedBook.id) {
        book.shelf = newShelf
      }
    })
    BooksAPI.update(selectedBook, newShelf)

    this.setState(() => ({
      books: this.state.books
    })
    )
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }



  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookSelf books={this.state.books} shelves={shelves} onShelfChange={this.changeBookShelf} />
        )}
        />
        <Route path='/search' render={() => (
          <BookSearch books={this.state.books} shelves={shelves} onShelfChange={this.changeBookShelf} />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
