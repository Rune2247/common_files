module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:testing-library/dom'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'testing-library'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'comma-dangle': [
      'error', 'never'
    ],
    indent: [
      'error',
      2,
      { SwitchCase: 1 }
    ], // Tabs: indent: ["error", "tab"],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ],
    'no-empty': 'error',
    curly: 'error',
    eqeqeq: [
      'error', 'smart'
    ],
    'require-await': 'error',
    'brace-style': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'always'
    ],
    'space-in-parens': [
      'error', 'never'
    ],
    'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'prefer-const': 'error'
  }
}
