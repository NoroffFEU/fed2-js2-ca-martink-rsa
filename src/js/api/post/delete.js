import { doFetch } from '../../utilities/fetch';
import { API_SOCIAL_POSTS } from '../constants';

/**
 * Deletes a post with the given ID.
 *
 * @param {string} id - The ID of the post to delete.
 * @returns {Promise<void>} A promise that resolves when the post is deleted.
 * @throws Will throw an error if the fetch request fails.
 */
export async function deletePost(id) {
  const url = `${API_SOCIAL_POSTS}/${id}`;
  const method = 'DELETE';

  try {
    await doFetch({
      url,
      options: { method },
      useAuth: true,
    });
  } catch (error) {
    console.error(error);
  }
}
