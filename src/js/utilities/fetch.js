import { headers } from './headers';

/**
 * Fetches data from the provided URL.
 *
 * @param {Object} options - The fetch options.
 * @param {string} options.url - The URL to fetch the data from.
 * @param {Object} [options.options] - The fetch options.
 * @param {boolean} [options.useAuth] - If true, the fetch request will include the Authorization header.
 * @returns {Promise<Object>} The JSON response from the fetch request.
 * @throws Will throw an error if the fetch request fails.
 */
export async function doFetch({ url, options = {}, useAuth = false }) {
  const combinedOptions = {
    method: 'GET',
    headers: headers({ useAuth }),
    ...options,
  };

  try {
    const response = await fetch(url, combinedOptions);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
