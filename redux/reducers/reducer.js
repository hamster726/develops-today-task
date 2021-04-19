import {
  GET_ALL_POSTS,
  GET_POST,
  CREATE_NEW_POST,
  UPDATE_POST,
  DELETE_POST,
  GET_COMMENTS,
  CREATE_COMMENT,
  IS_LOADED,
} from "../types";

import axios from "axios";
import {
  getAllPosts,
  isLoaded,
  getPost as getSinglePost,
} from "../actions/actions";

const initialState = {
  posts: [],
  comments: [],
  isLoaded: true,
  currentPost: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case GET_POST: {
      return {
        ...state,
        currentPost: action.payload,
      };
    }
    case CREATE_NEW_POST: {
    }
    case UPDATE_POST: {
    }
    case DELETE_POST: {
    }
    case GET_COMMENTS: {
    }
    case CREATE_COMMENT: {
    }

    case IS_LOADED: {
      return {
        ...state,
        isLoaded: action.payload,
      };
    }

    default:
      console.log("default dispatch", action);
      return state;
  }
};

export const getPosts = () => (dispatch) => {
  dispatch(isLoaded(false));

  const response = axios
    .get(`https://simple-blog-api.crew.red/posts`)
    .then((res) => {
      dispatch(getAllPosts(res.data));
      dispatch(isLoaded(true));
      console.log("posts getted", res.data);
    });
};

export const getPost = (postId) => {
  return (dispatch) => {
    dispatch(isLoaded(false));
    const response = axios
      .get(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`)
      .then((res) => {
        dispatch(getSinglePost(res.data));
        dispatch(isLoaded(true));
      });
  };
};

export const deletePost =  (postId) => {
  return  (dispatch) => {
    const response =  axios.delete(`https://simple-blog-api.crew.red/posts/${postId}`)
      .then(dispatch(getPosts()))
      .catch(e => console.log(`Error with deleting post: ${e}`))
  };
};

export default reducer;
