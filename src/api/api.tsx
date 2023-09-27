import axios from 'axios';
import { User } from '../../types/User';
import { Post } from '../../types/Post';
import { Comment } from '../../types/Comment';

const API_URL = 'https://jsonplaceholder.typicode.com';

//added a custom delay of 500 ms for displaying the loader

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export async function getUsers(): Promise<User[]> {
  return wait(500)
    .then(() => axios.get(`${API_URL}/users`))
    .then((response) => response.data);
}

export async function getUserInfo(id: number): Promise<User[]> {
  return wait(500)
    .then(() => axios.get(`${API_URL}/users/${id}`))
    .then((response) => response.data);
}

export async function getAllPosts(id: number): Promise<Post[]> {
  return wait(500)
    .then(() => axios.get(`${API_URL}/users/${id}/posts`))
    .then((response) => response.data);
}

export async function getCurrentPost(id: number): Promise<Post> {
  return wait(500)
    .then(() => axios.get(`${API_URL}/posts/${id}`))
    .then((response) => response.data);
}

export async function getComments(id: number): Promise<Comment[]> {
  return wait(500)
    .then(() => axios.get(`${API_URL}/posts/${id}/comments`))
    .then((response) => response.data);
}
