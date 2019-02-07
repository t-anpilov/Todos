import React, { Component } from 'react';
import './app.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'User'
        }
    }
    render() { 
        return (
            <header className="header">
                <h1> {this.state.userName}'s page</h1>
            </header>    
        );
    }    
}

export default Header