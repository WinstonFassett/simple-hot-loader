var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client', 
		'webpack/hot/dev-server',
		'./app'],
	// devtool: 'source-map',
	output: {
		path: path.join(__dirname, 'output'),
		filename: 'bundle.js'
	},
	resolveLoader: {
		modulesDirectories: ['..', 'node_modules']
	},
	resolve: {
		extensions: ['', '.js', '.msx']
	},
	module: {
		loaders: [
			{ test: /example\\.*\.js$/, loaders: ['simple-hot'] },
			{ test: /example\\.*\.msx$/, loaders: ['simple-hot', 'msx'] }
		]
	}
};
