import React, { useContext } from 'react';
import ConfigContext from '../../context/ConfigContext';
import styles from './Dates.module.css';

const Dates = ({ dateStart, dateEnd }) => {
  const config = useContext(ConfigContext);

  const { date_locale, date_options } = config;

  const StartDate = new Date(dateStart);
  const EndDate = new Date(dateEnd);

  return (
    <h6 className={styles.root}>
      {StartDate.toLocaleDateString(date_locale, date_options)} to{' '}
      {dateEnd
        ? EndDate.toLocaleDateString(date_locale, date_options)
        : 'present'}
    </h6>
  );
};

export default Dates;
