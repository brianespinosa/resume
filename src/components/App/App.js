import React, { Component } from 'react';
import styles               from './App.module.css';
import Header               from '../Header';

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Header />
      </div>
    );
  }
}

export default App;
