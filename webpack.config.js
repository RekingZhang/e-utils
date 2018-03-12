const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //每次构建清理dist目录
module.exports = {
	entry: './index.js',
	output: {
		filename: 'e-utils.js',
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
	plugins: [new CleanWebpackPlugin(['dist'])]
};
