import  { createContext } from 'react';
import data               from '../resume.json';

const EducationContext = createContext(data.education)

export default EducationContext;
