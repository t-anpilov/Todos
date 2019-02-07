import React from 'react';

function ToDoItem(props) {
    return (
        <div className="list_row">
            <p><input type="checkbox" checked={props.item.completed} />{props.item.text}</p>
        </div>    
    )
}

export default ToDoItem