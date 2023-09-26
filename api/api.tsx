import axios from 'axios';
import { User } from '../types/User';
import { Post } from '../types/Post';

const API_URL = 'https://jsonplaceholder.typicode.com';

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}
  
export async function getUsers(): Promise<User[]> {
    return wait(500)
      .then(() => axios.get(`${API_URL}/users`))
      .then(response => response.data);
}

export async function getUserInfo(id: number): Promise<User[]> {
    return wait(500)
      .then(() => axios.get(`${API_URL}/users/${id}`))
      .then(response => response.data);
}

export async function getAllPosts(id: number): Promise<Post[]> {
    return wait(500)
      .then(() => axios.get(`${API_URL}/users/${id}/posts`))
      .then(response => response.data);
}

export async function getCurrentPost(id: number): Promise<Post> {
  return wait(500)
    .then(() => axios.get(`${API_URL}/posts/${id}`))
    .then(response => response.data);
}