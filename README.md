eslint-config-wework
================

[![Libraries.io for GitHub][librariesio-image]][librariesio-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]


>Shared ESLint configuration for WeWork projects

# Introduction

ESLint config for WeWork projects. This is an extension of `eslint-config-airbnb` and also provides `react`, `imports`, `lodash`, `mocha`, and `node` presets.


# Usage

### Install:

**Yarn**

```sh
(
  export PKG=eslint-config-wework;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev  "$PKG@latest"
)
```

**NPM**

If using **npm 5+**, use this shortcut

```sh
npx install-peerdeps --dev eslint-config-wework
```

If using **npm < 5**, Linux/OSX users can run

```sh
(
  export PKG=eslint-config-wework;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Which produces and runs a command like:

```sh
npm install --save-dev eslint-config-airbnb eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-config-airbnb@^#.#.# eslint-config-lodash@^#.#.# eslint-config-mocha@^#.#.# eslint-config-node@^#.#.# eslint-config-promise@^#.#.# eslint-config-security@^#.#.#
```

If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```sh
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-airbnb
```
The cli will produce and run a command like:

```sh
npm install --save-dev eslint-config-airbnb eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-config-airbnb@^#.#.# eslint-config-lodash@^#.#.# eslint-config-mocha@^#.#.# eslint-config-node@^#.#.# eslint-config-promise@^#.#.# eslint-config-security@^#.#.#
```

### Configure:

First, `touch .eslintrc` if you don't already have one.

Then update it to look like the following:

```
{
  "root": true,
  "extends": [
    "wework"
  ],
  "rules": {
    # Override preset rules here
  },
}
```

### React:
To enable React-specific rules, extend `wework/react`:

```
{
  "root": true,
  "extends": [
    "wework",
    "wework/react"
  ],
  "rules": {
    # Override preset rules here
  },
}
```

### Imports:
To enable linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names, extend `wework/imports`:

```
{
  "root": true,
  "extends": [
    "wework",
    "wework/react",
    "wework/imports"
  ],
  "rules": {
    # Override preset rules here
  },
}
```

### Lodash:
To enable React-specific rules, extend `wework/lodash`:

```
{
  "root": true,
  "extends": [
    "wework",
    "wework/lodash"
  ],
  "rules": {
    # Override preset rules here
  },
}
```

### Mocha:
To enable linting of Mocha/Chai/Sinon tests add a eslintrc file to your test folder:

```
{
  "extends": [
    "wework/mocha",
  ],
  "rules": {
    # Override preset rules here
  },
}
```

### Node:
For Node specific config, including identification of security hotspots, add a eslintrc file to your node src folder:

```
{
  "extends": [
    "wework/node",
  ],
  "rules": {
    # Override preset rules here
  },
}
```

Note: the security plugin is slow, finds a lot of false positives which need triage by a human, and isn't geared towards client-side. Use sparingly!
See https://github.com/nodesecurity/eslint-plugin-security for more info.

# Development

1. Checkout this repo
2. Make changes in a feature branch and open a PR to `master`

The purpose of this package is to define and enforce code style in JavaScript code. With that in mind please be mindful when proposing changes, explain your reasoning and consider other users.

# npm scripts

Target | Behavior
------------ | -------------
**`npm run lint`** | (*Run as a git pre-commit hook*) Lint the config with itself
**`npm run security-scan`** | (*Run as a git pre-push hook*) Checks npm dependencies for security vulnerabilities
**`npm run release <version>`** | Generates a changelog, updates package version, tags and pushes via [`np`](https://www.npmjs.com/package/np). This should only be run on an up-to-date `master` by a maintainer of this package. <br /><br />Version can be a semver level: `patch | minor | major | prepatch | preminor | premajor | prerelease`, or a valid semver version: `1.2.3`.

**`npm run` will list all npm scripts**


[npm-url]: https://npmjs.org/package/eslint-config-wework
[npm-version-image]: http://img.shields.io/npm/v/eslint-config-wework.svg?style=flat-square
[npm-downloads-image]: http://img.shields.io/npm/dm/eslint-config-wework.svg?style=flat-square

[license-url]: LICENSE
[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square

[librariesio-url]: https://libraries.io/npm/eslint-config-wework
[librariesio-image]: https://img.shields.io/librariesio/github/wework/eslint-config-wework.svg?maxAge=2592000
