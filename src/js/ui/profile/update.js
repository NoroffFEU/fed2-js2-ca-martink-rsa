import { AUTHOR_NAME } from '../../api/constants';
import { updateProfile } from '../../api/profile/update';

/**
 * Handles the profile update form submission.
 *
 * @param {Event} event - The event object from the form submission.
 * @returns {Promise<void>}
 */
export async function onUpdateProfile(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const bio = form.bio.value || '';
  const avatarUrl = form['avatar-url'].value || undefined;
  const avatarAlt = form['avatar-alt'].value || undefined;
  const bannerUrl = form['banner-url'].value || undefined;
  const bannerAlt = form['banner-alt'].value || undefined;

  if (!bio && !avatarUrl && !bannerUrl) {
    return;
  }

  const body = {
    bio,
  };

  if (avatarUrl) {
    body.avatar = {
      url: avatarUrl,
      alt: avatarAlt,
    };
  }

  if (bannerUrl) {
    body.banner = {
      url: bannerUrl,
      alt: bannerAlt,
    };
  }

  await updateProfile(AUTHOR_NAME, body);
  window.location.reload();
}
