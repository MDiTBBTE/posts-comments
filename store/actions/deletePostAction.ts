import axios from 'axios';
import * as types from '../types';

export const fetchForDeletePost = (id: number) => async (dispatch) => {
  const res = await axios
    .delete(`https://simple-blog-api.crew.red/posts/${id}`)
    .then(({ status }) => status === 200 && axios.get('https://simple-blog-api.crew.red/posts'));

  dispatch({
    type: types.DELETE_POST,
    payload: res.data,
  });
};
