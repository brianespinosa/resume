import React from 'react';
import styles from './Bullets.module.css';

const Bullets = ({ bullets }) => {
  return (
    <ul className={styles.root}>
      {bullets.map((bullet) => (
        <li className={styles.li} key={bullet}>
          {bullet}
        </li>
      ))}
    </ul>
  );
};

export default Bullets;
