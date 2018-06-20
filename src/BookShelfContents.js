import React from 'react'
import './App.css'
import Book from './Book'

class BookShelfContents extends React.Component {
  render() {
    const { books, shelves, shelf, onShelfChange } = this.props
    return (
      shelf.displayOnShelf && (
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{shelf.displayText}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    books.filter((book) => (
                      book.shelf === shelf.value
                    )).map((book) => {
                      return (
                        <li key={book.id}>
                          <Book book={book} shelves={shelves} shelf={shelf} onShelfChange={onShelfChange} />
                        </li>
                      )
                    })
                  }
                </ol>
              </div>
            </div>
          </div>
        </div>
      )
    )
  }
}

export default BookShelfContents
