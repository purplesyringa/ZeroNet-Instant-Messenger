const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");


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

const BABEL = {
	loader: "babel-loader",
	options: {
		presets: ["env", "stage-0"],
		plugins: [
			"syntax-decorators",
			"transform-decorators-legacy",
			[
				"babel-plugin-transform-builtin-extend", {
					globals: ["Error", "Array"]
				}
			],
			"transform-class-properties"
		]
	}
};


let circularErrors;
module.exports = {
	context: path.resolve(__dirname, "./src"),
	resolve: {
		modules: [path.resolve(__dirname, "./src"), "node_modules"]
	},
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
						sass: genSass(true),
						js: BABEL
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
					BABEL,
					{
						loader: "eslint-loader"
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				use: BABEL,
				include: [
					path.resolve(__dirname, "../node_modules/zero-dev-lib"),
					path.resolve(__dirname, "../node_modules/vue-awesome")
				]
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
		]),
		new CopyWebpackPlugin([
			{
				from: "./p2p.json",
				to: "./p2p.json"
			}
		]),
		new CopyWebpackPlugin([
			{
				from: "./data",
				to: "./data"
			}
		]),
		new CircularDependencyPlugin({
			exclude: /node_modules/,
			failOnError: true,
			allowAsyncCycles: false,
			cwd: process.cwd(),

			onStart() {
				circularErrors = [];
			},
			onDetected({paths, compilation}) {
				let newPaths = Array.from(paths);
				newPaths.pop();
				for(let i = 0; i < newPaths.length; i++) {
					newPaths.push(newPaths.shift());
					if(circularErrors.indexOf(newPaths.join(" -> ")) > -1) {
						return;
					}
				}
				circularErrors.push(newPaths.join(" -> "));

				compilation.errors.push(new Error(paths.join(" -> ")));
			}
		})
	]
};