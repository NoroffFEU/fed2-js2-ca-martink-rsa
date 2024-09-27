import { API_AUTH_REGISTER } from '../constants';

export async function register({ name, email, password, bio, banner, avatar }) {
  const url = `${API_AUTH_REGISTER}`;
  const data = JSON.stringify({
    name,
    email,
    password,
    bio,
    banner,
    avatar,
  });
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
    return json;
  } catch (error) {
    console.error(error);
  }
}
