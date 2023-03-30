import axios from 'axios';

const api = axios.create({
    baseURL: 'https://thdacademy.com:8443'
})

export { api };