import React, { Component } from 'react';
import './app.css';
import Header from './Header';
import LogIn from './LogIn';
import List from './List';

class App extends Component {
    render() {
      return (
        <section className="Main">
            <Header/>
            <List/>
            <LogIn/>
        </section>
      );
    }
  }
export default App