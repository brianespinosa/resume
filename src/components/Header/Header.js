import React, {useContext} from 'react';
import styles              from './Header.module.css';
import UserContext         from '../../context/UserContext';

const Header = () => {
    const user = useContext(UserContext)
    return (
      <header className={styles.root}>
        <h1>{user.first_name} {user.last_name}</h1>
      </header>
    );
}

export default Header;
