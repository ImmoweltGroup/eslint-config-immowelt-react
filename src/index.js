module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'standard-react',
    'plugin:flowtype/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react'
  ],
  plugins: ['compat', 'flowtype', 'promise', 'babel', 'react', 'jsx-a11y'],
  env: {
    node: true,
    browser: true,
    jest: true
  },
  globals: {
    analytics: true,
    Generator: true,
    Iterator: true
  },
  settings: {
    polyfills: ['fetch']
  },
  rules: {
    'import/first': 0,
    'compat/compat': 2,
    'react/jsx-boolean-value': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/forbid-component-props': 0,
    'promise/avoid-new': 0
  }
};
