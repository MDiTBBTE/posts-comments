import axios from 'axios';
import * as types from '../types';
import _ from 'lodash';

export const fetchPost = (id: number) => async (dispatch) => {
  const res = await axios.get('https://simple-blog-api.crew.red/posts');

  const post = await _.find(res.data, { id: id });

  dispatch({
    type: types.GET_POST,
    payload: post,
  });
};
