import axios from 'axios';

const API = axios.create({ baseURL: "https://muss-memories.herokuapp.com" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        const token = JSON.parse(localStorage.getItem('profile')).token;
        req.headers.authorization = `Bearer ${token}`
    }
    return req
})

// const url = 'https://muss-memories.herokuapp.com/posts';

export const fetchPosts = () => API.get('/posts');

export const createPost = (newPost) => API.post('/posts', newPost);

export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/users/signin', formData);

export const signUp = (formData) => API.post('/users/signup', formData)