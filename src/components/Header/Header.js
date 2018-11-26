import React, { Fragment, useContext } from 'react';
import styles from './Header.module.css';
import UserContext from '../../context/UserContext';
import Section from '../../modules/Section';

const Header = () => {
  const { email, first_name, last_name, phone, summary } = useContext(
    UserContext
  );
  return (
    <Fragment>
      <header className={styles.root}>
        <h1 className={styles.name}>
          {first_name} {last_name}
        </h1>
        <a href={'tel:' + phone}>{phone}</a>
        <p>{email}</p>
      </header>
      {summary && (
        <Section title={summary.title}>
          <p>{summary.content}</p>
        </Section>
      )}
    </Fragment>
  );
};

export default Header;
