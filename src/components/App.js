import React, { Component } from 'react';
import logo                 from '../logo.svg';
import styles               from './App.module.css';
import data                 from '../resume.json';

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1>{data.user.first_name}</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
