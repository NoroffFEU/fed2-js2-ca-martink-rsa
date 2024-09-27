import { login } from '../../api/auth/login';

export async function onLogin(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const email = formData.get('email');
  const password = formData.get('password');

  login({ email, password });
}
