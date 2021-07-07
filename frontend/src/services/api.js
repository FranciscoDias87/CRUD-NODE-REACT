import axios from 'axios';

const api = axios.create({
  bareURL: 'http://localhost:3333/',
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

export default api;