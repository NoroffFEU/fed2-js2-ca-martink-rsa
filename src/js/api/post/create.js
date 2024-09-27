import { headers } from '../../utilities/headers';
import { API_SOCIAL_POSTS } from '../constants';

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
    console.log(json);
    // window.location.href = `/post/${json.data.id}`;
    return json;
  } catch (error) {
    console.error(error);
  }
}
