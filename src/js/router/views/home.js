import { clearAccessToken } from '../../utilities/token';
import { authGuard } from '../../utilities/authGuard';

authGuard();

const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', () => {
  clearAccessToken();
  authGuard();
});
