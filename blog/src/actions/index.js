import jsonPlaceHolder from '../apis/jsonPlaceHolder';

const fetchPosts = () => async function(dispatch){
        const response = await jsonPlaceHolder.get('/posts');
        
        dispatch ({type:'FETCH_POSTS',payload: response.data})
  };


export default fetchPosts;