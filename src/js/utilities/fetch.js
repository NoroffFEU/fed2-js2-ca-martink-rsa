import { headers } from './headers';

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
