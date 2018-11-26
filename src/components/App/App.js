import React, { Component } from 'react';
import styles from './App.module.css';
import Header from '../Header';
import Jobs from '../Jobs';
import Education from '../Education';

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Header />
        <Jobs />
        <Education />
      </div>
    );
  }
}

export default App;
