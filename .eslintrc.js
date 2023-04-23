module.exports = {
  extends: ['eslint-config-airbnb-base', 'prettier', 'plugin:react/recommended'],
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/extensions': 0,
    'arrow-body-style': 'off',
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
  },
}
