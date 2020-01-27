import { get, post, put } from './networking';

// end point
export const endpoint = {
  login: async params => post('/login', params),
  register: async params => post('/register', params)
};


export default { endpoint };
