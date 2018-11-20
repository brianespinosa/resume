import React, {useContext} from 'react';
import styles              from './Jobs.module.css';
import JobsContext         from '../../context/JobsContext';
import Job                 from './Job';

const Jobs = () => {
    const jobs = useContext(JobsContext)
    return (
      <main className={styles.root}>
        {jobs.map(job => (
          <Job {...job} key={job.company + job.date_start}></Job>
        ))}
      </main>
    );
}

export default Jobs;
