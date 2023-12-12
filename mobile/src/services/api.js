import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mb-tqf.anonymous.mobile.exp.direct:3333',
});

export default api;