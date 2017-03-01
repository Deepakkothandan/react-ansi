const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./app/app.jsx'
	],

	output: {
		path: path.join(__dirname + '/dist'),
		filename: "bundle.js",
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: [/node_modules/],
				enforce: 'pre',
				use: [{
					loader: 'eslint-loader',
					options: {
						emitWarning: true,
					}
				}]
			},
			{
				test: /\.jsx?$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader'
				}],
			},
		],
	},

	resolve: {
    extensions: [".js", ".jsx"]
  },

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Ansi',
			template: './app/index.html.ejs',
			inject: 'body',
		}),
		new webpack.HotModuleReplacementPlugin()
	],

	devServer: {
		hot: true,
		inline: true,
		contentBase: 'app/'
	}
}