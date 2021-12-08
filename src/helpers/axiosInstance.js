import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://10.0.2.2:3002/api',
});

export default axiosInstance;
