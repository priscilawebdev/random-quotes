const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: ['babel-polyfill', path.resolve(__dirname, './src/index.js')],
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/',
	},
	plugins: [
		new webpack.NamedModulesPlugin()
	],
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}, {
			test: /(components|containers)*(js|jsx)$/,
			loaders: 'baggage-loader?{"index.sass":{}}',
			include: path.join(__dirname, 'src')
		}, {
			// Preprocess 3rd party .css files located in node_modules
			test: /\.css$/,
			include: /node_modules/,
			loaders: ['style-loader', 'css-loader']
		}, {
			test: /\.(eot|ttf|woff|woff2)$/,
			loader: 'file-loader'
		}, {
			test: /\.(gif|png|jpe?g|svg)$/i,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: '[sha512:hash:base64:7].[ext]'
					}
				},
				{
					loader: 'image-webpack-loader',
					options: {
						svgo: {
							plugins: [
								{ removeTitle: true },
								{ removeMetadata: true },
								{ removeUselessStrokeAndFill: true },
								{ cleanupIDs: true },
								{ removeUnknownsAndDefaults: true },
								{ removeEmptyText: true },
								{ removeHiddenElems: true },
								{ removeEmptyAttrs: true },
								{ removeComments: true }
							]
						}
					}
				}
			]
		}]
	},
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	}
}
