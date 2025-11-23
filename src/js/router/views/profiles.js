import { readProfile } from '../../api/profile/read';
import { setLogoutListener } from '../../ui/global/logout';
import { authGuard } from '../../utilities/authGuard';

authGuard();
setLogoutListener();

const profilesContainer = document.getElementById('profiles-container');

/**
 * Generates HTML for a profile.
 *
 * @param {Object} profile - The profile data.
 * @param {string} profile.name - The name of the profile.
 * @param {string} profile.bio - The bio of the profile.
 * @param {string} profile.email - The email of the profile.
 * @param {Object} profile.banner - The banner image data.
 * @param {string} profile.banner.url - The URL of the banner image.
 * @param {string} profile.banner.alt - The alt text for the banner image.
 * @param {Object} profile.avatar - The avatar image data.
 * @param {string} profile.avatar.url - The URL of the avatar image.
 * @param {string} profile.avatar.alt - The alt text for the avatar image.
 * @returns {HTMLElement} The generated profile HTML element.
 */
function generateProfileHtml(profile) {
  const profileContainer = document.createElement('article');
  profileContainer.classList.add('profile-container', 'container-1');

  const name = document.createElement('h2');
  name.textContent = profile.name;
  profileContainer.appendChild(name);

  const bioElement = document.createElement('p');
  bioElement.textContent = `Bio: ${profile.bio || 'No bio available'}`;
  profileContainer.appendChild(bioElement);

  const email = document.createElement('p');
  email.textContent = `Email: ${profile.email}`;
  profileContainer.appendChild(email);

  const bannerContainer = document.createElement('div');
  bannerContainer.classList.add('banner-container');
  profileContainer.appendChild(bannerContainer);

  const bannerImage = document.createElement('img');
  bannerImage.src =
    profile.banner.url ||
    'https://images.unsplash.com/photo-1727324735243-de8c0997c169';
  bannerImage.alt = profile.banner.alt || '';
  bannerImage.classList.add('banner-img');
  bannerContainer.appendChild(bannerImage);

  const avatarContainer = document.createElement('div');
  avatarContainer.classList.add('avatar-container');
  profileContainer.appendChild(avatarContainer);

  const avatarImage = document.createElement('img');
  avatarImage.src =
    profile.avatar.url ||
    'https://images.unsplash.com/photo-1727455113671-ef73f638b87f';
  avatarImage.alt = profile.avatar.alt || '';
  avatarImage.classList.add('avatar-img');
  avatarContainer.appendChild(avatarImage);

  return profileContainer;
}

/**
 * Generates and displays a profile.
 *
 * @param {Object} profile - The profile data.
 */
function generateAndDisplayProfile(profile) {
  const profileHtml = generateProfileHtml(profile);
  profilesContainer.appendChild(profileHtml);
}

/**
 * Handles the profile page.
 *
 * @returns {Promise<void>}
 */
async function handleProfilesPage() {
  const name = new URLSearchParams(window.location.search).get('name');
  const profile = await readProfile(name);
  if (profile && profilesContainer) {
    generateAndDisplayProfile(profile);
  }
}

handleProfilesPage();
