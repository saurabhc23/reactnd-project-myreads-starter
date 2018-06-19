import React from 'react';


const MoveActions = (props) => (
    <div className="book-shelf-changer">
                <select onChange={(event) => props.onShelfChange(props.book, event.target.value)} value={props.currentState}>
                    <option value="move" disabled>Move to...</option>
                    {
                        props.options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.displayText}
                            </option>
                        ))
                    }
                </select>
     </div>
  );

export default MoveActions