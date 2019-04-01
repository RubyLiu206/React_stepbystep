import axios from 'axios';

const KEY = 'AIzaSyAn7kcRwcyfoIgbkIO0W0jsIi8FeH6UC0I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

