import { onLogout } from '../auth/logout';

export function setLogoutListener() {
  const logoutButton = document.getElementById('logout-button');
  if (!logoutButton) return;
  logoutButton.addEventListener('click', () => {
    onLogout();
  });
}
