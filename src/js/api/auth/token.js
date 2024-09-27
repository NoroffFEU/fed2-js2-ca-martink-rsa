export function setAccessToken(accessToken) {
  localStorage.setItem('token', accessToken);
}

export function getAccessToken() {
  const accessToken = localStorage.getItem('token');
  return accessToken;
}
