import axios from 'axios';
export default axios.create({
    baseURL: '../photo/api.json'
});