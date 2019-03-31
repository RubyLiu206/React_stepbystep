import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:  
            "Client-ID 7c717871bb16e1545277d91fed53d6fc09e58e5a4a81b3bb02ca723886a5581a"
    }
});