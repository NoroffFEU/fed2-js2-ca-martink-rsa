import { doFetch } from '../../utilities/fetch';
import { API_SOCIAL_PROFILES } from '../constants';

/**
 * Reads a social profile.
 *
 * @param {string} name - The name of the profile to read.
 * @returns {Promise<Object>} The profile data.
 */
export async function readProfile(name) {
  const url = `${API_SOCIAL_PROFILES}/${name}`;
  const { data } = await doFetch({ url, useAuth: true });
  return data;
}
