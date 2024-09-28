/**
 * Redirects the user to the login page if they are not authenticated.
 *
 * This function checks if a token exists in the local storage. If the token
 * is not found, it alerts the user that they must be logged in to view the page
 * and then redirects them to the login page.
 */
export function authGuard() {
  if (!localStorage.token) {
    alert('You must be logged in to view this page');
    window.location.href = '/auth/login/';
  }
}
