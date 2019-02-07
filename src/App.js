import React, { Component } from 'react';
import './app.css';
import List from './List';

class App extends Component {
    render() {
      return (
        <section className="Main">
            <List />
        </section>
      );
    }
  }
export default App