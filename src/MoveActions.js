import React, { Component } from 'react';

class MoveActions extends Component {
    render() {
        const { options, currentState, book, onShelfChange } = this.props
        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => onShelfChange(book, event.target.value)} value={currentState}>
                    <option value="move" disabled>Move to...</option>
                    {
                        options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.displayText}
                            </option>
                        ))
                    }
                </select>
            </div>
        )
    }
}

export default MoveActions