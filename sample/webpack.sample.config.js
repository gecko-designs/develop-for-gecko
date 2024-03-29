const path = require('path');
const Fiber = require('fibers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const distDir = './dist';

const settings = {
	context: __dirname,
	target: 'web',
	entry: {
		'scripts': path.resolve(__dirname, `./build/index.js`)
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
	},
	output: {
		path: path.resolve(__dirname, distDir),
		publicPath: `/dist`,
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [require('autoprefixer')],
						}
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
							fiber: Fiber,
						}
					}
				],
			},
			// Babel loader for es6 support
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [
						'@babel/preset-env',
						'@babel/preset-react',
					],
					plugins: [
						'@babel/transform-react-jsx',
						'@babel/plugin-transform-runtime',
						'@babel/plugin-syntax-dynamic-import',
						'@babel/plugin-proposal-object-rest-spread',
						'@babel/plugin-proposal-class-properties',
					],
				},
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles.bundle.css',
		}),
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: 'initial',
					name: 'vendor',
					enforce: true
				}
			}
		},
		minimizer: [
			new TerserPlugin({
				parallel: true,
				extractComments: true,
				terserOptions: {
					mangle: true,
				}
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	}
};

module.exports = settings;