import React, { Component } from 'react';

class MoveActions extends Component {
    render() {
        const { options, currentState, book, onShelfChange } = this.props
        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => onShelfChange(book, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    {
                        options.map((option) => (
                            <option value={option.value}
                                selected={currentState === option.value}
                            >{option.displayText}</option>
                        ))
                    }
                </select>
            </div>
        )
    }
}

export default MoveActions