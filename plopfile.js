const _ = require('lodash');

module.exports = function (plop) {
	plop.setActionType('Logger', (answers, config) => {
		console.log(answers);
		return config.successMessage || 'Completed!';
	});

	// create your generators here
	plop.setGenerator('app-generator', {
		description: 'App generator for single spa',
		// array of inquirer prompts
		prompts: [
			{
				type: 'input',
				name: 'appName',
				message: 'Application Name:',
				validate: (appName) => appName && appName === _.kebabCase(appName),
			},
		],
		// array of actions
		actions: [
			{
				type: 'Logger',
				successMessage: 'Logging example:',
			},
			{
				type: 'addMany',
				destination: 'packages/{{appName}}',
				templateFiles: 'packages/app-scaffold',
				base: 'packages/app-scaffold',
				globOptions: {
                    ignore: ['**/node_modules', '**/yarn.lock', '**/dist'],
				},
			},
		],
	});
};
