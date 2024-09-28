import { doFetch } from '../../utilities/fetch';
import { API_SOCIAL_POSTS } from '../constants';

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
