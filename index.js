module.exports = {
  extends: ['@unumid/eslint-config', 'standard-jsx', 'standard-react'],
  rules: {
    // don't require React to be imported in files that use JSX
    'react/react-in-jsx-scope': 'off',
    // prop-types are unnecessary when using TypeScript
    'react/prop-types': 'off',
    // don't enforce specific handler names
    'react/jsx-handler-names': 'off',
    // don't require file extensions for js/jsx/ts/tsx imports
    // js and ts need to be included here even though they are ignored in the base eslint-config,
    // because the rule added here overwrites it, not extends it
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  env: {
    browser: true,
  },
};
