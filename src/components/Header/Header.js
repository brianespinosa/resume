import React, { useContext } from 'react';
import styles from './Header.module.css';
import UserContext from '../../context/UserContext';

const Header = () => {
  const { email, first_name, last_name, phone } = useContext(UserContext);
  return (
    <header className={styles.root}>
      <h1>
        {first_name} {last_name}
      </h1>
      <p>{phone}</p>
      <p>{email}</p>
    </header>
  );
};

export default Header;
