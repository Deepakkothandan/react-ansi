const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
	devtool: 'source-map',
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
			{
				test: /\.scss$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader',
					query: {
						modules: true,
						localIdentName: '[name]__[local]___[hash:base64:5]'
					}
				}, {
					loader: 'sass-loader'
				}, {
					loader: 'autoprefixer-loader',
					query: {
						browsers: 'last 2 versions'
					}
				}]
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
		new webpack.HotModuleReplacementPlugin(),
		new WebpackBrowserPlugin({
			port: 8080,
			url: 'http://localhost'
		})
	],

	devServer: {
		hot: true,
		inline: true,
		contentBase: 'app/',
		historyApiFallback: true,
		overlay: true
	}
}