import axios from 'axios';

const api = axios.create({
  baseURL: 'http://enqueteapi.luxfacta.com/',
  timeout: 20000,
});

export default api;
