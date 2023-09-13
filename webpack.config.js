/* eslint-disable */

var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
  output: {
    library: 'VectorMarkers',
    libraryTarget: 'umd',
  },
  externals: [
    {
      leaflet: {
        amd: 'leaflet',
        commonjs: 'leaflet',
        commonjs2: 'leaflet',
        root: 'L'
      }
    }
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {
        test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [ autoprefixer({ browsers: ['last 3 version', '> 10%', 'IE 8'] }) ]
							}
						},
						{
							loader: 'sass-loader',
							options: {
								includePaths: [path.resolve(__dirname, "./src")]
							}

						}]
				})
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: "leaflet-vector-markers.css"})
  ],
};
