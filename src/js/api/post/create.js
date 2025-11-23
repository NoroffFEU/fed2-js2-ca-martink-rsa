import { headers } from '../../utilities/headers';
import { API_SOCIAL_POSTS } from '../constants';

/**
 * Creates a new post by sending a POST request to the API.
 *
 * @param {Object} post - The post data.
 * @param {string} post.title - The title of the post.
 * @param {string} post.body - The body content of the post.
 * @param {Array<string>} [post.tags] - An array of tags associated with the post.
 * @param {string} [post.media] - The media URL associated with the post.
 * @returns {Promise<Object>} The JSON response from the API.
 * @throws Will throw an error if the fetch request fails.
 */
export async function createPost({ title, body, tags, media }) {
  const url = `${API_SOCIAL_POSTS}`;
  const data = JSON.stringify({ title, body, tags, media });
  const options = {
    method: 'POST',
    body: data,
    headers: headers({ useAuth: true }),
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    window.location.href = `../../listing/single/?id=${json.data.id}`;
    return json;
  } catch (error) {
    console.error(error);
  }
}
