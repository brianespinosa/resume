import React, { useContext } from 'react';
import EducationContext from '../../context/EducationContext';
import Section from '../../modules/Section';
import Article from '../../modules/Article';

const Education = () => {
  const education = useContext(EducationContext) || {};
  return education.list ? (
    <Section title={education.title}>
      {education.list.map((job) => {
        const {
          bullets,
          date_start,
          date_end,
          description,
          school,
          location,
          degree,
        } = job;
        return (
          <Article
            key={school + date_start}
            bullets={bullets}
            dates={[date_start, date_end]}
            description={description}
            header={school}
            location={location}
            subHeader={degree}
          />
        );
      })}
    </Section>
  ) : null;
};

export default Education;
