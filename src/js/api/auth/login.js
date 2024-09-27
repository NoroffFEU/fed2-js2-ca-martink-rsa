import { API_AUTH_LOGIN } from '../constants';
import { setAccessToken } from '../../utilities/token';
import { headers } from '../../utilities/headers';

export async function login({ email, password }) {
  const url = `${API_AUTH_LOGIN}`;
  const data = JSON.stringify({ email, password });
  const options = {
    method: 'POST',
    body: data,
    headers: headers(),
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    setAccessToken(json.data.accessToken);

    window.location.href = '/';

    return json;
  } catch (error) {
    console.error(error);
  }
}
