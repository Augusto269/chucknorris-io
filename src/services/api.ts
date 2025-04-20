import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.chucknorris.io/', // Hardcode for simplicity
  timeout: 5000,
});

export default api;
