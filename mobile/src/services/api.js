import axios from 'axios';

const api = axios.create({
    baseURL: 'cy-anw.rafaadail.mobile.exp.direct:3333',
});

export default api;