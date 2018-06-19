import React from 'react'
import './App.css'
import BookSelfHeader from './BookSelfHeader'
import BookSelfContents from './BookSelfContents'
import { Link } from 'react-router-dom'




class BookSelf extends React.Component {



  render() {
    const { books, shelves, onShelfChange } = this.props
    return (
      <div className="list-books">
        <BookSelfHeader />{
          shelves.map((shelf) => (
            <BookSelfContents books={books} shelves={shelves} shelf={shelf} onShelfChange={onShelfChange} />
          ))
        }
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookSelf