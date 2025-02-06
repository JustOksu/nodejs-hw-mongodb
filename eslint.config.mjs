import globals from 'globals';
import pluginJs from 'eslint-plugin-js';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      js: pluginJs,
    },
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'warn',
    },
  },
  ...tseslint.configs.recommended,
];
