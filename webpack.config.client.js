const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
	name: "client",
	entry: {
		client: path.resolve(__dirname, "client/client.tsx"),
	},
	mode: "production",
	output: {
		path: path.resolve(__dirname + "/dist/static"),
		filename: "[name].[contenthash].js",
		publicPath: "/",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	target: "web",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: "ts-loader",
						options: {
							configFile: "tsconfig.client.json",
						},
					},
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new WebpackManifestPlugin({}),
		new Dotenv(),
	],
};
