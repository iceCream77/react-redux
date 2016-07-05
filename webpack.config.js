var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: './dist',
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  watch:true,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
		loaders: [
			{
		    test: /\.(js|jsx)$/,
		    exclude: /(node_modules|bower_components)/,
		    loader: 'babel', // 'babel-loader' is also a legal name to reference 
		    query: {
		      presets: ['react', 'es2015']
		    }
		  },
		 	{	test: /\.css/,
		 		loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		 	},
		 	{	test: /\.less/,
	      loaders: ["style", "css", "less"]
	    }
		]
	},
	plugins: [

	    new ExtractTextPlugin("index.css"),
	    new TransferWebpackPlugin([
      {from: 'res'}
    ], path.resolve(__dirname,"./"))

	]
}