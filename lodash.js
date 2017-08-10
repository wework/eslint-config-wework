module.exports = {
  plugins: [
    'lodash',
  ],

  extends: [
    'plugin:lodash/recommended',
  ],

  rules: {
    // Chaining makes tree-shaking difficult
    'lodash/prefer-lodash-chain': 0,

    // Native methods are fine too
    'lodash/prefer-lodash-method': 0,

    // Note: decide on https://github.com/wework/eslint-config-wework/issues/5
    // and update these setting to reflect
    'lodash/import-scope': 0,
    'lodash/chaining': [2, 'always', 4],
  },
};
