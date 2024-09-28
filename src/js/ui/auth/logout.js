import { authGuard } from '../../utilities/authGuard';
import { clearAccessToken } from '../../utilities/token';

export function onLogout() {
  clearAccessToken();
  authGuard();
}
