const _ = require('lodash');
const yup = require('yup');
const replace = require('replace');

module.exports = function (plop) {
	plop.setActionType('Replace', (answers, config) => {
		replace({
			regex: config.regex,
			replacement: config.replacement,
			paths: config.paths,
			recursive: true,
			silent: true,
		});
		return config.successMessage || 'Completed!';
	});

	// Validation rules
	const nameRules = yup
		.string()
		.matches(/\w/, 'should be a alphanumeric')
		.min(3)
		.test(
			'kebab-case',
			'should be kebab cased',
			(val) => val === _.kebabCase(val)
		)
		.required();

	// create your generators here
	plop.setGenerator('app-generator', {
		description: 'App generator for single spa',
		// array of inquirer prompts
		prompts: [
			{
				type: 'input',
				name: 'appOrg',
				message: 'Organization Name:',
				validate: (appOrg) => {
					nameRules.validateSync(appOrg);
					return true;
				},
			},
			{
				type: 'input',
				name: 'appName',
				message: 'Application Name:',
				validate: (appName) => {
					nameRules.validateSync(appName);
					return true;
				},
			},
		],
		// array of actions
		actions: (data) => {
			return [
				{
					type: 'addMany',
					destination: 'packages/{{appName}}',
					templateFiles: 'packages/app-scaffold',
					base: 'packages/app-scaffold',
					globOptions: {
						ignore: ['**/node_modules', '**/yarn.lock', '**/dist'],
					},
				},
				{
					type: 'Replace',
                    regex: 'app-scaffold',
                    replacement: data.appName,
					paths: [`packages/${data.appName}`],
				},
				{
					type: 'Replace',
                    regex: 'app-organization',
                    replacement: data.appOrg,
					paths: [`packages/${data.appName}`],
				},
				{
					type: 'Replace',
                    regex: 'APP_SCAFFOLD',
                    replacement: _.snakeCase(data.appName).toUpperCase(),
					paths: [`packages/${data.appName}`],
				},
			];
		},
	});
};
