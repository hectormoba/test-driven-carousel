module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: '18.1.0',
    },
  },
  env: {
    node: true,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
