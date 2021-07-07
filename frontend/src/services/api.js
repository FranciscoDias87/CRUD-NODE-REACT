import axios from 'axios';

const api = axios.create({
  bareURL: 'http://localhost:3000/',
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

export default api;