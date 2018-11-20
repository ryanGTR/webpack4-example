const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");	

module.exports = {
	entry: {
		main: ["./src/main.js"]
	},
	mode: "development",
	output: {
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname, "../dist"),
		publicPath: "/"
	},
	devServer: {
		contentBase: "dist",
		overlay: true,
		hot: true,
		stats: {
			colors: true
		}
	},
	devtool: "source-map",
	resolve: {
		alias: {
			vue$: "vue/dist/vue.esm.js"
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: [
					{
						loader: "vue-loader"
					}
				]
			},
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader"
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]
			},
			{
				test: /\.sass$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			},
			{
				test:/\.html$/,
				use: [
					
					{
						loader: "html-loader",
						options: {
							attrs: ["img:src"]
						}
					}
				]
			},
			{
				test: /\.(jpg|gif|png)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "images/[name].[ext]"
						}
					}
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HTMLWebpackPlugin({
			"template": "./src/index.html"
		})
	]
}
