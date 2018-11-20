import  { createContext } from 'react';
import data               from '../resume.json';

const JobsContext = createContext(data.jobs)

export default JobsContext;
