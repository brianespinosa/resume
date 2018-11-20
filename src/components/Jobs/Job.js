import React   from 'react';
import Section from '../../modules/Section';
import Bullets from '../../modules/Bullets';
import Dates    from '../../modules/Dates';

const Job = ({
  bullets,
  company,
  date_end,
  date_start,
  description,
  job_title,
}) => {
  
    return (
      <Section>
        {company &&
          <h3>{company}</h3>
        }
        
        {job_title &&
          <h4>{job_title}</h4>
        }

        {date_start &&
          <Dates 
            dateStart={date_start} 
            dateEnd={date_end}
          />
        }
        
        {description &&
          <p>{description}</p>
        }
        
        {bullets && <Bullets bullets={bullets} />}
      </Section>
    );
}

export default Job;
