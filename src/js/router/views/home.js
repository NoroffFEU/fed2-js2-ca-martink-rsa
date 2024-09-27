import { clearAccessToken } from '../../api/auth/token';
import { authGuard } from '../../utilities/authGuard';

authGuard();

const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', () => {
  clearAccessToken();
  authGuard();
});
