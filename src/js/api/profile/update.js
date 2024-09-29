import { doFetch } from '../../utilities/fetch';
import { API_SOCIAL_PROFILES } from '../constants';

/**
 * Updates a profile with the given username.
 *
 * @param {string} username - The username of the profile to update.
 * @param {Object} profile - The profile data to update.
 * @param {string} profile.bio - The bio of the profile.
 * @param {Object} profile.avatar - The avatar of the profile.
 * @param {string} profile.avatar.url - The URL of the avatar.
 * @param {string} profile.avatar.alt - The alt text of the avatar.
 * @param {Object} profile.banner - The banner of the profile.
 * @param {string} profile.banner.url - The URL of the banner.
 * @param {string} profile.banner.alt - The alt text of the banner.
 * @returns {Promise<Object>} The JSON response from the API.
 * @throws Will throw an error if the fetch request fails.
 */
export async function updateProfile(username, { bio, avatar, banner }) {
  const url = `${API_SOCIAL_PROFILES}/${username}`;
  const body = { bio, avatar, banner };
  try {
    const profile = await doFetch({
      url,
      options: { method: 'PUT' },
      body,
      useAuth: true,
    });
    return profile.data;
  } catch (error) {
    console.error(error);
  }
}
