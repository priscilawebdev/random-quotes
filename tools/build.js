/* eslint-disable no-console */
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('../webpack.prod')

console.log(chalk.blue('Generating minified bundle for production via Webpack. This will take a moment...'))

webpack(webpackConfig).run((err, stats) => {
	if (err) { // so a fatal error occurred. Stop here.
		console.log(chalk.red(err))
		return 1
	}

	const jsonStats = stats.toJson()

	if (jsonStats.hasErrors) {
		return jsonStats.errors.map(error => console.log(chalk.red(error)))
	}

	if (jsonStats.hasWarnings) {
		console.log('Webpack generated the following warnings: '.bold.yellow)
		jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)))
	}

	console.log(`Webpack stats: ${stats}`)

	// if we got this far, the build succeeded.
	console.log(chalk.green('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'))

	return 0
})
