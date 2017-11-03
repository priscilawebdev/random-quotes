const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config.prod')
const log = console.log

log(chalk.blue('Generating minified bundle for production via Webpack. This will take a moment...'))


webpack(webpackConfig).run((err, stats) => {
	if (err) { // so a fatal error occurred. Stop here.
		log(chalk.red(err))
		return 1
	}

	const jsonStats = stats.toJson()

	if (jsonStats.hasErrors) {
		return jsonStats.errors.map(error => log(chalk.red(error)))
	}

	if (jsonStats.hasWarnings) {
		log(chalk.yellow('Webpack generated the following warnings:'))
		jsonStats.warnings.map(warning => log(chalk.yellow(warning)))
	}

	log(`Webpack stats: ${stats}`)

	// if we got this far, the build succeeded.
	log(chalk.green('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'))

	return 0
})
