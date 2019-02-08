import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import todosData from './todosData';
import Form from './Form';
import './app.css';


class List extends Component {
    constructor(){
        super();
        this.state = {
            todos: todosData,
            isLoading: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDClick = this.handleDClick.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            });
            return {
                todos: updatedTodos
            }
        });
    }
    handleDClick(id) {
        this.setState(prevState => {
            const updatedTodos2 = prevState.todos.map((todo) => {
                if (todo.id === id) {
                    todo.text = prompt('write your todo')
                }
                return todo
            });
            return {
                todos: updatedTodos2
            }
        });
    }     
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false})
        }, 1500)
    }
    
    render() {
        const todoItems = this.state.todos.map((item) => <ToDoItem key={item.id} item={item}
        handleChange={this.handleChange} handleDClick={this.handleDClick}/>)
        return (
            <div className="list_block">
                {todoItems}
                <Form isLoading={this.state.isLoading}/>
            </div>    
        )
    }    
}

export default List