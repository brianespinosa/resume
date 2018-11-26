import React from 'react';
import styles from './Section.module.css';

const Section = ({ children, title }) => {
  return (
    <section className={styles.root}>
      {title && (
        <h2 className={styles.title} id={title}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;
