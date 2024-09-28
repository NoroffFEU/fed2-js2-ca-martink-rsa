import { doFetch } from '../../utilities/fetch';
import { API_SOCIAL_POSTS, API_SOCIAL_PROFILES } from '../constants';

export async function readPost(id) {
  const url = `${API_SOCIAL_POSTS}/${id}`;
  try {
    const post = await doFetch({ url, useAuth: true });
    return post.data;
  } catch (error) {
    console.error(error);
  }
}

export async function readPosts(limit = 12, page = 1, tag) {
  const url = `${API_SOCIAL_POSTS}?limit=${limit}&page=${page}&tag=${tag}`;
  try {
    const posts = await doFetch({ url, useAuth: true });
    return posts.data;
  } catch (error) {
    console.error(error);
  }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {
  const url = `${API_SOCIAL_PROFILES}/${username}/posts?limit=${limit}&page=${page}&tag=${tag}`;
  try {
    const posts = await doFetch({ url, useAuth: true });
    console.log(posts);
    return posts.data;
  } catch (error) {
    console.error(error);
  }
}
