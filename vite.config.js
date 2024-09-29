import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  appType: 'mpa',
  base: '',
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        login: resolve(__dirname, './auth/login/index.html'),
        register: resolve(__dirname, './auth/register/index.html'),
        profile: resolve(__dirname, './profile/index.html'),
        profiles: resolve(__dirname, './profiles/index.html'),
        editPost: resolve(__dirname, './post/edit/index.html'),
        createPost: resolve(__dirname, './post/create/index.html'),
        listing: resolve(__dirname, './listing/index.html'),
        listingSingle: resolve(__dirname, './listing/single/index.html'),
      },
    },
  },
});
