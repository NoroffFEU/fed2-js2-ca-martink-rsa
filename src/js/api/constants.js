// Use Postman, or JavaScript to get your API key
// In Workflow we will learn how to secure this information
export const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY);

export const API_BASE = 'https://v2.api.noroff.dev';

export const API_AUTH = `${API_BASE}/auth`;

export const API_AUTH_LOGIN = `${API_AUTH}/login`;

export const API_AUTH_REGISTER = `${API_AUTH}/register`;

export const API_AUTH_KEY = `${API_AUTH}/create-api-key`;

export const API_SOCIAL = `${API_BASE}/social`;

export const API_SOCIAL_POSTS = `${API_SOCIAL}/posts`;

export const API_SOCIAL_PROFILES = `${API_SOCIAL}/profiles`;

// const options = {
//   headers: {
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWFydGlua3J1Z2VyIiwiZW1haWwiOiJNYXJLcnU3NzY3OEBzdHVkLm5vcm9mZi5ubyIsImlhdCI6MTcyNzQ1MTk1Nn0.OrH9iPbcoyCASHOK8PF6NDmuBEbeZFwYmwNHTNjaIWY',
//     'X-Noroff-API-Key': '6ea1ce54-b2f0-4d4a-96a3-dfb8999aa912'
//   }
// };
