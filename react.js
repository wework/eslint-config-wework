module.exports = {
  extends: [
    'plugin:react/recommended',
  ],

  rules: {
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': 'off',
    'react/sort-comp': 'off',
    'react/no-danger': 'off',
    'react/require-default-props': 'off',

    'react/no-array-index-key': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/no-unknown-property': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-deprecated': 'error',

    'react/jsx-key': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': 'error',
  }
}
