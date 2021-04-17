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

const getAllPosts = (posts) => {
  return {
    type: GET_ALL_POSTS,
    payload: posts,
  };
};

const getPost = (post) => {
  return {
    type: GET_POST,
    payload: post,
  };
};

const createNewPost = (data) => {
  return {
    type: CREATE_NEW_POST,
    payload: data,
  };
};

const updatePost = (data) => {
  return {
    type: UPDATE_POST,
    payload: data,
  };
};

const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    payload: postId,
  };
};

const getComments = (postId) => {
  return {
    type: GET_COMMENTS,
    payload: postId,
  };
};

const createComment = (postId) => {
  return {
    type: CREATE_COMMENT,
    payload: postId,
  };
};

const isLoaded = (status) => {
  return {
    type: IS_LOADED,
    payload: status,
  };
};


export {
  getAllPosts,
  getPost,
  createNewPost,
  updatePost,
  deletePost,
  getComments,
  createComment,
  isLoaded,
};
