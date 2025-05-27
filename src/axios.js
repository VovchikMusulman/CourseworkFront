import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const endpoint = mode.value === 'login'
    ? 'http://localhost:8000/api/login'
    : 'http://localhost:8000/api/register'

export default instance;