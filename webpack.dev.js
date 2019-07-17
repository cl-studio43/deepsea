const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './app/main.js',
	output: {
		filename: './dist/bundle.[hash].js',
	},
	resolve: {
		modules: [
			"node_modules",
		],
		extensions: [".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react'],
						plugins: [
							["import", { libraryName: "antd", style: "css", }],
							"transform-class-properties",
							"transform-object-rest-spread",
							"react-hot-loader/babel"
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
				//   {
				// 	loader: 'url-loader',
				// 	options: { limit: 40000 }
				//   },
				//   {
				// 	loader: 'image-webpack-loader',
				// 	options: { byPassOnDebug: true }
				//   },
				  {
					loader: 'file-loader',
					options:{
					  name: '[name].[ext]',

					}
				  }
				]
			  },
			{
				test: /\.(eot|svg|ttf|woff|woff2)\w*/,
				loader: 'url-loader?limit=1000000'
			},
			{
				test: /\.mp4$/,
				use: 'file-loader?name=videos/[name].[ext]',
		 	}
		]
	},
	devtool: 'cheap-module-eval-source-map',
	plugins: [
		new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './template.html'
    }),
  ]
};