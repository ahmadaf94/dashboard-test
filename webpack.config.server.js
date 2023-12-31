const nodeExternals = require("webpack-node-externals");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	name: "server",
	entry: {
		server: path.resolve(__dirname, "server/server.tsx"),
	},
	mode: "production",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
	},
	resolve: {
		extensions: [".ts", ".tsx"],
	},
	externals: [nodeExternals()],
	target: "node",
	plugins: [
		new CopyPlugin({
			patterns: [{ context: "server", from: "views", to: "views" }],
		}),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: "ts-loader",
						options: {
							configFile: "tsconfig.server.json",
						},
					},
				],
			},
		],
	},
};
