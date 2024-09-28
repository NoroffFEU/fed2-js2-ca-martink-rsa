import { authGuard } from '../../utilities/authGuard';
import { clearAccessToken } from '../../utilities/token';

/**
 * Handles logging the user out.
 */
export function onLogout() {
  clearAccessToken();
  authGuard();
}
