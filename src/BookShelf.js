import React from 'react'
import './App.css'
import BookShelfHeader from './BookShelfHeader'
import BookShelfContents from './BookShelfContents'
import { Link } from 'react-router-dom'




class BookShelf extends React.Component {



  render() {
    const { books, shelves, onShelfChange } = this.props
    return (
      <div className="list-books">
        <BookShelfHeader />
        {
          shelves.map((shelf) => (
            <BookShelfContents key={shelf.value} books={books} shelves={shelves} shelf={shelf} onShelfChange={onShelfChange} />
          ))
        }
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookShelf