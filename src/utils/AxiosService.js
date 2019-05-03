import axios from 'axios';

const AxiosService = axios.create({
  baseURL: 'https://yts.am/api/v2/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// singleton instance
export default AxiosService;
