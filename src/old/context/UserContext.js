import { createContext } from 'react';
import data from '../resume.json';

const UserContext = createContext(data.user);

export default UserContext;
