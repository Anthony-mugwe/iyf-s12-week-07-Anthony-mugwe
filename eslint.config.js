export default [
  {
    ignores: ['node_modules/**', 'coverage/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        window: 'readonly',
        Date: 'readonly',
        Math: 'readonly',
        JSON: 'readonly',
        String: 'readonly',
        Number: 'readonly',
        Array: 'readonly',
        Promise: 'readonly',
        setTimeout: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-console': 'off',
    },
  },
];
