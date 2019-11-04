const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	stats: { children: false },
	entry: {
		home: './src/home.js'
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'static/js/[name].[chunkHash:6].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
	      title: 'webpack test',
	      filename: 'home.html'
	    }),
	    new MiniCssExtractPlugin({
	      filename: 'static/css/[name].[chunkHash:6].css'
	    }),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader'],
			},
			{
				test: /\.less$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader','less-loader','postcss-loader'],
			},
			{
		        test: /\.(png|jpe?g|gif)$/i,
		        use: [
		          {
		            loader: 'file-loader',
		            options: {
			          name: 'static/images/[path][name].[ext]',
			          publicPath: '/'
			        },
		          },
		        ],
		      },
		],
	},
}