# UnumID ESLint React Config

Shared [ESLint](https://eslint.org) config for React projects. Extends our base [config](https://github.com/UnumID/eslint-config) with React-specific rules + settings.

## Installation

Install via npm cli

```shell
npm i -D git+ssh://git@github.com:UnumID/eslint-config.git#{version}
```

Or by adding to `package.json` directly

```json
{
  ...
  "devDependencies": {
    ...
    "@unumid/eslint-config-react": "git+ssh://git@github.com:UnumID/eslint-config-react.git#{version}
  }
}
```

### Peer Dependencies

The `eslint` package itself and required ESLint plugins must be installed as peer dependencies.

```shell
npm i --save-peer eslint eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-promise
```

## Usage

Simply extend `@unumid/eslint-config-react` in the project's ESLint config (`.eslintrc`, `.eslintrc.js`, etc)

```json
{
  "extends": ["@unumid/eslint-config-react"]
}
```

## Custom Rules

- `react/react-in-jsx-scope`: Don't require React to be imported in files that use JSX.
- `react/prop-types`: Prop-types are unnecessary when using TypeScript, so this rule is disabled.
- `react/jsx-handler-names`: Don't enforce specific handler names.
- `import/extensions`: Don't require file extensions when importing `.jsx` or `.tsx` files
