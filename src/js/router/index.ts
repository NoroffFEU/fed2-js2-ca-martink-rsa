// This function controls which JavaScript file is loaded on which page
// In order to add additional pages, you will need to implement them below
// You may change the behaviour or approach of this file if you choose
export default async function router(pathname = window.location.pathname) {
  switch (pathname) {
    case '/':
      await import('./views/home.ts');
      break;
    case '/auth/':
      await import('./views/auth.ts');
      break;
    case '/auth/login/':
      await import('./views/login.ts');
      break;
    case '/auth/register/':
      await import('./views/register.ts');
      break;
    case '/post/':
      await import('./views/post.ts');
      break;
    case '/post/edit/':
      await import('./views/postEdit.ts');
      break;
    case '/post/create/':
      await import('./views/postCreate.ts');
      break;
    case '/profile/':
      await import('./views/profile.ts');
      break;
    default:
      await import('./views/notFound.ts');
  }
}
