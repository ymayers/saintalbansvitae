import axios from "axios";

// const baseURL = 'http://localhost:3000';

const baseURL = process.env.NODE_ENV === 'production'
? 'https://stalbansvitae-api.herokuapp.com/'
: 'http://localhost:3000';

const api = axios.create({
  baseURL: baseURL,
});

// ================ AUTH ==================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const registerUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/auth/verify");
    return resp.data;
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};

// ========================================
// ================ posts ===============
// ========================================

export const getAllPosts = async (id) => {
  const resp = await api.get(`/users/${id}/posts`);
  // const resp = await api.get(`users/${id}/posts`);
  return resp.data;
};

export const getOnePost = async (id, post_id) => {
  const resp = await api.get(`users/${id}/posts/${post_id}`);
  return resp.data;
};

export const makePost = async (postData) => {
  const resp = await api.post("/post", postData);
  return resp.data;
};

export const putPost = async (id, postData) => {
  const resp = await api.put(`users/${id}/posts/${id}`, postData);
  return resp.data;
};

export const destroyPost = async (id) => {
  const resp = await api.delete(`users/user.${id}/posts/${id}`);
  return resp;
};

// ========================================
// ================ comments =================
// ========================================

export const getAllComments = async () => {
  const resp = await api.get("/comments");
  return resp.data;
};

export const getOneComment = async (id) => {
  const resp = await api.get(`/comments/${id}`);
  return resp.data;
};

export const postComment = async (commentData) => {
  const resp = await api.post("/comments", commentData);
  return resp.data;
};

export const putComment = async (id, commentData) => {
  const resp = await api.put(`/comments/${id}`, commentData);
  return resp.data;
};

export const destroyComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
  return resp;
};

// ========= Add Comment to Post ============

export const addComment = async (commentId, postId) => {
  const resp = await api.get(`/posts/${postId}/comments/${commentId}`);
  return resp.data;
};
