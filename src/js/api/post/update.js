import { doFetch } from '../../utilities/fetch';
import { API_SOCIAL_POSTS } from '../constants';

/**
 * Updates a post with the given ID.
 *
 * @param {string} id - The ID of the post to update.
 * @param {Object} post - The post data to update.
 * @param {string} post.title - The title of the post.
 * @param {string} post.body - The body of the post.
 * @param {string[]} post.tags - The tags of the post.
 * @param {string} post.media - The media of the post.
 * @returns {Promise<Object>} The JSON response from the API.
 * @throws Will throw an error if the fetch request fails.
 */
export async function updatePost(id, { title, body, tags, media }) {
  const url = `${API_SOCIAL_POSTS}/${id}`;
  const method = 'PUT';
  const postBody = JSON.stringify({ title, body, tags, media });

  try {
    const post = await doFetch({
      url,
      options: { method, body: postBody },
      useAuth: true,
    });
    return post.data;
  } catch (error) {
    console.error(error);
  }
}
