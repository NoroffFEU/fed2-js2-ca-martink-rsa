/**
 * Stores the access token in local storage.
 *
 * @param {string} accessToken - The access token to be stored.
 */
export function setAccessToken(accessToken) {
  localStorage.setItem('token', accessToken);
}

/**
 * Retrieves the access token from local storage.
 *
 * @returns {string|null} The access token if it exists, otherwise null.
 */
export function getAccessToken() {
  const accessToken = localStorage.getItem('token');
  return accessToken;
}

/**
 * Removes the access token from local storage.
 */
export function clearAccessToken() {
  localStorage.removeItem('token');
}
