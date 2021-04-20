import {
  GET_ALL_POSTS,
  GET_POST,
  CREATE_NEW_POST,
  UPDATE_POST,
  DELETE_POST,
  UPDATE_COMMENTS,
  CREATE_COMMENT,
  IS_LOADED,
} from "../types";

import axios from "axios";
import {
  getAllPosts,
  isLoaded,
  getPost as getSinglePost,
  updateComments,
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
    case UPDATE_COMMENTS: {
      return {
        ...state,
        comments: action.payload,
      };
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

export const getPosts = () => async (dispatch) => {
  dispatch(isLoaded(false));

  const response = await axios
    .get(`https://simple-blog-api.crew.red/posts`)
    .then((res) => {
      console.log("posts dispatching");
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
        dispatch(updateComments(res.data.comments));
        dispatch(isLoaded(true));
      });
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    const response = await axios
      .delete(`https://simple-blog-api.crew.red/posts/${postId}`)
      .catch((e) => console.log(`Error with deleting post: ${e}`));
  };
};

export const addComment = (postId, commentValue) => {
  return async (dispatch) => {
    const response = await axios.post(
      "https://simple-blog-api.crew.red/comments",
      {
        postId: postId,
        body: commentValue,
      }
    );
    dispatch(getPost(postId));
  };
};

export const addPost = (newPostTitle, newPostBody) => {
  return async (dispatch) => {
    const data = {
      title: newPostTitle,
      body: newPostBody,
    };
    const response = axios.post("https://simple-blog-api.crew.red/posts", data);
    dispatch(getPosts());
  };
};

export default reducer;
