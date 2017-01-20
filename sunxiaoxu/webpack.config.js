var webpack = require('webpack');

config = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		'./src/index.js',
	],
	output: {
		path: './build',
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: "style!css"
		}, {
			test: /\.(jpe?g|png|gif|svg)$/i,
			loader: 'url?limit=25000!img?progressive=true'
		}, {
			test: /\.woff$/,
			loader: 'url?limit=100000'
		}, {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react', 'stage-0']
			}
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		// new webpack.ProvidePlugin({
		// 	$: "jquery",
		// 	jQuery: "jquery",
		// 	"window.jQuery": "jquery"
		// })
	]
};
module.exports = config;