module.exports = {
  'extends': [
    'eslint:recommended',
    'airbnb'
  ],

  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'experimentalObjectRestSpread' : true
    }
  },

  'rules': {
    'no-prototype-builtins': 'off',
    'arrow-body-style': 'off',
    'no-underscore-dangle': 'off',
    'func-names': 'off',
    'padded-blocks': 'off',
    'class-methods-use-this': 'off',

    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none', 'varsIgnorePattern': 'logger' }],
    'max-len': ['error', {'code': 120, 'tabWidth': 2, 'ignoreUrls': true}],
    'arrow-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': 'off',
    'id-length': ['error', {'exceptions': ['$', '_', 'L', 'v', 'w', 'h', 'i', 'j']}],
    'array-bracket-spacing': ['off', 'always'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline'
    }],
  },
}
