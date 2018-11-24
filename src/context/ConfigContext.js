import { createContext } from 'react';
import data from '../resume.json';

const defaults = {
  date_locale: 'en-US',
  date_options: {
    year: 'numeric',
    month: 'long',
  },
};
const ConfigContext = createContext(data.config || defaults);

export default ConfigContext;
