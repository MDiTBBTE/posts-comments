import * as types from '../types';

const initialState = {
  posts: [],
  post: {},
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case types.GET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case types.DELETE_POST:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
