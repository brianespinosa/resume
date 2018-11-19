import React, { Component } from 'react';
import styles               from './App.module.css';
import data                 from '../resume.json';

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <header className={styles.header}>
          <h1>{data.user.first_name} {data.user.last_name}</h1>
        </header>
      </div>
    );
  }
}

export default App;
