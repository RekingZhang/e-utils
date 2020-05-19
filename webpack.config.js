const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //每次构建清理dist目录
module.exports = {
	entry: './index.js',
	output: {
		filename: 'e-utils.min.js',
		library: 'eutils',
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new UglifyJsPlugin({
			test: /\.js($|\?)/i
		})
	]
};
