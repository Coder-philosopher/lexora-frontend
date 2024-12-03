import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://lexora-backend-production.up.railway.app/api/',
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;
