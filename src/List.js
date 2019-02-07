import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import todosData from './todosData';
import './app.css';


class List extends Component {
    constructor(){
        super();
        this.state = {
            todos: todosData
        };
    }
        
    render() {
        const todoItems = this.state.todos.map((item) => <ToDoItem key={item.id} item={item}/>)
        return (
            <div className="list_block">
                {todoItems}
            </div>    
        )
    }    
}

export default List