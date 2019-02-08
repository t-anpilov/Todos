import React from 'react';

function ToDoItem(props) {

    const newStyle = { 
        backgroundColor: '#BC8F8F'
    }
        return (
            <div className="list_row">
                <p                     
                    style={props.item.completed ? newStyle: null}
                    onDoubleClick={() => props.handleDClick(props.item.id)}
                >
                    <input type="checkbox"
                        checked={props.item.completed}
                        onChange={() => props.handleChange(props.item.id)} />
                    {props.item.text}
                </p>
            </div>    
        )
    
}

export default ToDoItem