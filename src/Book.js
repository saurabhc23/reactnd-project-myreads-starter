import React from 'react'
import './App.css'
import MoveActions from './MoveActions'

class Book extends React.Component {
  render() {
    const { book, shelves, onShelfChange } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`
            }}>
          </div>
          <MoveActions options={shelves} currentState={book.shelf} book={book} onShelfChange={onShelfChange} />
        </div>
        <div className="book-title">{book.title}</div>
      </div>
    )
  }
}

export default Book