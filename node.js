// Config for Node projects
//
// Note this includes the `security` plugin to help identify security hotspots
// This plugin is slow, finds a lot of false positives which need triage by a human,
// and is not useful on the client-side!

module.exports = {
  plugins: [
    'node',
    'security',
  ],
  extends: [
    'plugin:node/recommended',
    'plugin:security/recommended',
  ],

  rules: {
    // Disable https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md
    // since projects have vastly different setups. Reccomend re-configuring in individual projects.
    'node/no-unsupported-features': 0,
  },
};


