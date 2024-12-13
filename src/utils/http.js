import axios from 'axios';

//This function is used for confuguration object
const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export default instance;
