// This function controls which JavaScript file is loaded on which page
// In order to add additional pages, you will need to implement them below
// You may change the behaviour or approach of this file if you choose
export default async function router(pathname = window.location.pathname) {
  switch (pathname) {
    case '/':
      await import('./views/home.js');
      break;
    case '/auth/login/':
      await import('./views/login.js');
      break;
    case '/auth/register/':
      await import('./views/register.js');
      break;
    case '/listing/':
      await import('./views/listing.js');
      break;
    case '/listing/single/':
      await import('./views/listingSingle.js');
      break;
    case '/post/edit/':
      await import('./views/postEdit.js');
      break;
    case '/post/create/':
      await import('./views/postCreate.js');
      break;
    case '/profile/':
      await import('./views/profile.js');
      break;
    case '/profiles/':
      await import('./views/profiles.js');
      break;
    default:
      await import('./views/notFound.js');
  }
}
