import { API_AUTH_LOGIN } from '../constants';
import { setAccessToken } from '../../utilities/token';
import { headers } from '../../utilities/headers';

/**
 * Logs in a user with the provided email and password.
 *
 * @param {Object} credentials - The login credentials.
 * @param {string} credentials.email - The user's email address.
 * @param {string} credentials.password - The user's password.
 * @returns {Promise<Object>} The response JSON from the login API.
 * @throws Will throw an error if the fetch request fails.
 */
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
