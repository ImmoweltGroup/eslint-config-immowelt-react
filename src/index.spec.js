const linter = require('eslint').linter;
const config = require('./index.js');

function runEslint(str) {
	//
	// ToDo: The compat/compat rule seems not to be functional when using the NodeJS API
	// @see https://github.com/ImmoweltHH/eslint-config-immowelt-react/issues/1
	//
	config.rules['compat/compat'] = 0;

	return linter.verify(str, config, {filename: 'foo.js'});
}

describe('eslint-config-immowelt', () => {
	it('should export a valid eslint config object structure.', () => {
		expect(typeof config).toBe('object');
	});

	it('should not throw errors when checking a valid code fixture.', () => {
		const errors = runEslint(`const x = true;

if (x) {
	console.log();
}

`);

		expect(errors).toEqual([]);
	});
});
