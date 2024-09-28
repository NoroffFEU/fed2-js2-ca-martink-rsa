import { doFetch } from '../../utilities/fetch';
import { API_SOCIAL_POSTS, API_SOCIAL_PROFILES } from '../constants';

/**
 * Fetches a single post by ID.
 *
 * @param {string} id - The ID of the post to read.
 * @returns {Promise<Object>} The JSON response from the API.
 * @throws Will throw an error if the fetch request fails.
 */
export async function readPost(id) {
  const url = `${API_SOCIAL_POSTS}/${id}`;
  try {
    const post = await doFetch({ url, useAuth: true });
    return post.data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Fetches a list of posts from the API.
 *
 * @param {number} limit - The maximum number of posts to fetch.
 * @param {number} page - The page number of the posts to fetch.
 * @param {string} tag - The tag to filter the posts by.
 * @returns {Promise<Object[]>} The JSON response from the API.
 * @throws Will throw an error if the fetch request fails.
 */
export async function readPosts(limit = 12, page = 1, tag) {
  const url = `${API_SOCIAL_POSTS}?limit=${limit}&page=${page}&tag=${tag}&_author=true`;
  try {
    const posts = await doFetch({ url, useAuth: true });
    return posts.data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Fetches a list of posts by a user from the API.
 *
 * @param {string} username - The username of the user to fetch posts for.
 * @param {number} limit - The maximum number of posts to fetch.
 * @param {number} page - The page number of the posts to fetch.
 * @param {string} tag - The tag to filter the posts by.
 * @returns {Promise<Object[]>} The JSON response from the API.
 * @throws Will throw an error if the fetch request fails.
 */
export async function readPostsByUser(username, limit = 12, page = 1, tag) {
  const url = `${API_SOCIAL_PROFILES}/${username}/posts?limit=${limit}&page=${page}&tag=${tag}`;
  try {
    const posts = await doFetch({ url, useAuth: true });
    return posts.data;
  } catch (error) {
    console.error(error);
  }
}
