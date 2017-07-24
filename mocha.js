// Config for a Mocha/Chai/Sinon harness
module.exports = {
  plugins: [
    'mocha',
  ],

  env: {
    mocha: true,
  },

  globals: {
    sinon: false,
    expect: false,
  },

  rules: {
    'no-unused-expressions': 0,
    'max-len': 0,
    'mocha/no-exclusive-tests': 1,
    'mocha/handle-done-callback': 1,
    'mocha/no-nested-tests': 1,
  },
};
