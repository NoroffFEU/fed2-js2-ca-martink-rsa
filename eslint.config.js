import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: { globals: { ...globals.browser, __dirname: true } },
    ignores: ['dist/**/*'],
  },
  pluginJs.configs.recommended,
];
