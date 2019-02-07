import React from 'react';
import ToDoItem from './ToDoItem';
import todosData from './todosData';
import './app.css';

function List() {
    const todoItems = todosData.map((item) => <ToDoItem key={item.id} item={item}/>)
    return (
        <div className="list_block">
            {todoItems}
        </div>    
    )
}

export default List