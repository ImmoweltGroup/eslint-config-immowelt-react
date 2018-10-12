const rules = require('./rules');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    '@immowelt/eslint-config-immowelt-base',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y'
  ],
  plugins: [
    'babel'
  ],
  env: {
    node: true,
    jest: true
  },
  globals: {
    analytics: true,
    Generator: true,
    Iterator: true
  },
  rules
};
