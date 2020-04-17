import axios from 'axios';

const api = axios.create({
  baseURL: 'http://enqueteapi.luxfacta.com/',
  timeout: 10000,
});

export default api;
