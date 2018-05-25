const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

function genSass(indentedSyntax) {
	return [
		"style-loader",
		"css-loader",
		"sass-loader" + (indentedSyntax ? "?indentedSyntax" : ""),
		{
			loader: "sass-resources-loader",
			options: {
				resources: [
					path.resolve(__dirname, "./src/sass/global.sass")
				]
			}
		}
	];
}

module.exports = {
	context: path.resolve(__dirname, "./src"),
	entry: {
		main: ["babel-polyfill", "./main.js"]
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		publicPath: "./",
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					loaders: {
						scss: genSass(false),
						sass: genSass(true)
					}
				}
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.scss$/,
				loader: genSass(false)
			},
			{
				test: /\.sass$/,
				loader: genSass(true)
			},
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["env"],
							plugins: [
								[
									"babel-plugin-transform-builtin-extend", {
										globals: ["Error", "Array"]
									}
								],
								"transform-class-properties"
							]
						}
					},
					{
						loader: "eslint-loader"
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["env", "flow"],
							plugins: [
								"transform-class-properties"
							]
						}
					}
				],
				include: /node_modules.*katex/
			},
			{
				test: /\.(gif|jpe?g|png)$/,
				loader: "file-loader"
			},
			{
				test: /\.svg$/,
				loader: "url-loader",
				options: {
					mimetype: "image/svg+xml"
				}
			},
			{
				test: /\.(ttf|otf|eot|woff2?)$/,
				loader: "file-loader?name=fonts/[name].[ext]"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "ZeroNet Instant Messenger",
			template: "./index.html",
			seo: {
				keywords: "fast,nice,messenger,zeronet,cms",
				description: "ZeroNet Instant Messenger"
			}
		}),
		new CopyWebpackPlugin([
			{
				from: "./content.json",
				to: "./content.json"
			}
		])
	]
};