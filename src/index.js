module.exports = {
	parser: 'babel-eslint',
	extends: [
		'xo',
		'xo-react',
		'plugin:jsx-a11y/recommended',
		'plugin:promise/recommended',
		'plugin:react/recommended'
	],
	plugins: [
		'compat',
		'promise',
		'babel',
		'react',
		'jsx-a11y'
	],
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
	rules: {
		'compat/compat': 2,
		'react/jsx-boolean-value': 0,
		'react/require-default-props': 0,
		'react/forbid-component-props': 0,
		'promise/avoid-new': 0,
		'generator-star-spacing': 0
	}
};
