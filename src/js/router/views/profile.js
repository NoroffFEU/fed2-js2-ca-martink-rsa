import { API_SOCIAL_PROFILES, AUTHOR_NAME } from '../../api/constants';
import { onUpdateProfile } from '../../ui/profile/update';
import { authGuard } from '../../utilities/authGuard';
import { doFetch } from '../../utilities/fetch';

authGuard();

const form = document.forms.updateProfile;

form.addEventListener('submit', onUpdateProfile);

/**
 * Handles the profile page.
 *
 * @returns {Promise<void>}
 */
async function handleProfilePage() {
  const url = `${API_SOCIAL_PROFILES}/${AUTHOR_NAME}`;
  const { data } = await doFetch({ url, useAuth: true });
  const profile = data;
  form.bio.value = profile.bio;
  form['avatar-url'].value = profile.avatar.url;
  form['avatar-alt'].value = profile.avatar.alt;
  form['banner-url'].value = profile.banner.url;
  form['banner-alt'].value = profile.banner.alt;
}

handleProfilePage();
