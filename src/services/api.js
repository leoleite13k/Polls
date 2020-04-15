import axios from 'axios';

const api = axios.create({
  baseURL: 'http://enqueteapi.luxfacta.com/',
});

export default api;
