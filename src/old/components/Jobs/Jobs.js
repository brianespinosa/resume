import React, { useContext } from 'react';
import JobsContext from '../../context/JobsContext';
import Section from '../../modules/Section';
import Article from '../../modules/Article';

const Jobs = () => {
  const jobs = useContext(JobsContext) || {};
  return jobs.list ? (
    <Section title={jobs.title}>
      {jobs.list.map((job) => {
        const {
          bullets,
          date_start,
          date_end,
          description,
          company,
          location,
          job_title,
        } = job;
        return (
          <Article
            key={company + date_start}
            bullets={bullets}
            dates={[date_start, date_end || 'present']}
            description={description}
            header={company}
            location={location}
            subHeader={job_title}
          />
        );
      })}
    </Section>
  ) : undefined;
};

export default Jobs;
