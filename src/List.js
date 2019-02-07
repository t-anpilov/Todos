import React from 'react';
import ToDoItem from './ToDoItem';
import './app.css';

function List() {
    return (
        <div className="list_block">
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>    
    )
}

export default List