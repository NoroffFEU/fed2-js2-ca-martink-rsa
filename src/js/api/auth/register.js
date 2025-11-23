import { API_AUTH_REGISTER } from '../constants';

/**
 * Registers a new user with the provided details.
 *
 * @param {Object} userDetails - The details of the user to register.
 * @param {string} userDetails.name - The name of the user.
 * @param {string} userDetails.email - The email of the user.
 * @param {string} userDetails.password - The password of the user.
 * @param {string} userDetails.bio - The bio of the user.
 * @param {string} userDetails.banner - The banner image URL of the user.
 * @param {string} userDetails.avatar - The avatar image URL of the user.
 * @returns {Promise<Object>} The response from the server.
 */
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
