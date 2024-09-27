import { API_AUTH_LOGIN } from '../constants';
import { setAccessToken } from './token';

export async function login({ email, password }) {
  const url = `${API_AUTH_LOGIN}`;
  const data = JSON.stringify({ email, password });
  const options = {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    setAccessToken(json.data.accessToken);

    setTimeout(() => {
      window.location.href = '/';
    }, 700);

    return json;
  } catch (error) {
    console.error(error);
  }
}
