import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'

class BookSearch extends React.Component {

  state = {
    searchResults: [],
    query: ''
  }

  updateQuery = (query) => {
    if (query) {
      BooksAPI.search(query, this.state.maxResults)
        .then((books) => {
          if (!books.error) {
            books.forEach((book) => {
              book.shelf = this.getshelf(book)
            })
            this.setState(() => ({
              searchResults: books,
              query: query.trim()
            }))
          } else {
            this.setState(() => ({
              searchResults: [],
              query: query.trim()
            }))
          }
        })
    } else {
      this.setState(() => ({
        searchResults: [],
        query: query.trim()
      }))
    }
  }


  getshelf = (book) => {
    var shelf = 'none';
    this.props.books.forEach((b) => {
      if (b.id === book.id) {
        shelf = b.shelf
      }
    })
    return shelf
  }


  render() {
    const { shelves, onShelfChange } = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.searchResults.map((book) => {
                return (
                  <li key={book.id}>
                    <Book book={book} shelves={shelves} onShelfChange={onShelfChange} />
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch