module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  extends: [
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    'eslint:recommended', // is standard for ESLint
    'plugin:react/recommended',
    "plugin:@typescript-eslint/eslint-recommended", // updates the eslint:recommended config to better suit Typescript
    'plugin:@typescript-eslint/recommended', // is a set of opinionated rules that adhere to TypeScript best practices
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', "react-hooks", "header", '@typescript-eslint'],
  rules: {
    indent: ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
  }
};
