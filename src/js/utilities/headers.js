import { API_KEY } from '../api/constants';

export function headers({ useAuth = false }) {
  const headers = new Headers();

  headers.append('Content-Type', 'application/json');

  if (API_KEY) {
    headers.append('X-Noroff-API-Key', API_KEY);
  }

  if (useAuth) {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }
  }

  return headers;
}
