import React, { useContext } from 'react';
import ConfigContext from '../../context/ConfigContext';
import styles from './Dates.module.css';

const Dates = ({ dateStart, dateEnd }) => {
  const { date_locale, date_options } = useContext(ConfigContext);

  const displayDate = (d) => {
    const newDate = new Date(d).toLocaleDateString(date_locale, date_options);

    // Make sure we have a valid date string
    return newDate !== 'Invalid Date' ? newDate : d;
  };

  const firstDate = displayDate(dateStart);
  const lastDate = displayDate(dateEnd);

  return (
    <div className={styles.root}>
      {firstDate && <time dateTime={dateStart}>{firstDate}</time>}

      {firstDate && lastDate && ' to '}

      {lastDate && <time dateTime={dateStart}>{lastDate}</time>}
    </div>
  );
};

export default Dates;
