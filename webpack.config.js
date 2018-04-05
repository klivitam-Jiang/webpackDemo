var path = require("path")
var htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: {
		bundle: "./index.js" // 这里可以打包多个js文件
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: "[name].js" // 这里可以直接获得js的名字
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loaders: ["style-loader","css-loader"],
				exclude: "/node_modules/"
			}
		]
	},
	resolve: {
		extensions: ['.js','.css']
	},
	devServer: {
		hot: true,
		inline: true
	},
	plugins: [
		new htmlWebpackPlugin({
			title: "klivitam webpack demo",
			chunks: ["bundle"],
			filename: "myindex.html"
		})
	]
}
















