import React, { useContext } from 'react';
import ConfigContext from '../../context/ConfigContext';
import Bullets from '../../modules/Bullets';
import Dates from '../../modules/Dates';
import styles from './Article.module.css';

const Article = ({
  bullets,
  className,
  dates,
  description,
  header,
  location,
  subHeader,
}) => {
  const { header_divider } = useContext(ConfigContext);

  return (
    <article
      className={className ? styles.root + ' ' + className : styles.root}
    >
      {(header || subHeader) && (
        <h3 className={styles.header}>
          {header}
          {subHeader && (
            <span className={styles.subHeader}>
              {header_divider ? ' ' + header_divider + ' ' : ' '}
              {subHeader}
            </span>
          )}
        </h3>
      )}

      {(dates[0] || dates[1]) && (
        <Dates dateStart={dates[0]} dateEnd={dates[1]} />
      )}

      {location && <address className={styles.location}>{location}</address>}

      {description && <p className={styles.description}>{description}</p>}

      {bullets && <Bullets bullets={bullets} />}
    </article>
  );
};

export default Article;
