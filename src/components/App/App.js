import React, { Component } from 'react';
import styles               from './App.module.css';
import Header               from '../Header';
import Jobs                 from '../Jobs';

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Header />
        <Jobs />
      </div>
    );
  }
}

export default App;
