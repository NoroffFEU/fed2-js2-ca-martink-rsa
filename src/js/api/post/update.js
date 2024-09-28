import { doFetch } from '../../utilities/fetch';
import { API_SOCIAL_POSTS } from '../constants';

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
