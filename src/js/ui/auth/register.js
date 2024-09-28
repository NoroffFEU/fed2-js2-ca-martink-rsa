import { register } from '../../api/auth/register';

/**
 * Handles the registration form submission.
 *
 * @param {Event} event - The event object from the form submission.
 * @returns {void}
 */
export async function onRegister(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const bio = formData.get('bio') || 'The default bio for a user.';
  const avatarUrl =
    formData.get('avatar') ||
    'https://images.unsplash.com/photo-1725714834984-4f37a2406563?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const bannerUrl =
    formData.get('banner') ||
    'https://images.unsplash.com/photo-1726502292828-d96388c6250f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D';

  register({
    name,
    email,
    password,
    bio,
    banner: { url: bannerUrl, alt: 'Default banner image' },
    avatar: { url: avatarUrl, alt: 'Default avatar image' },
  });
}
