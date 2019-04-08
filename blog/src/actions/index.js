import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';


const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  console.log(userIds);
  userIds.forEach(id => dispatch(fetchUser(id)));
};

const fetchPosts = () => async function(dispatch){
  const response = await jsonPlaceHolder.get('/posts');
  dispatch ({type:'FETCH_POSTS',payload: response.data});
  
};

const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch ({type: 'FETCH_USER',payload: response.data});
};
export default fetchPostsAndUsers;





