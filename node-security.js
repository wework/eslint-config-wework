// Config for identifying security hotspots
// Note: this plugin is slow, finds a lot of false positives which need triage by a human,
// and is more useful for node projects than client-side. Use sparingly!

module.exports = {
  plugins: [
    'security',
  ],
  extends: [
    'plugin:security/recommended',
  ],
};


