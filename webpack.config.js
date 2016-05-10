module.exports = {
//    context: __dirname + "/app",
    entry: "./main.js",
    output: {
        filename: "bundle.js",
	    path: __dirname,
        publicPath: "/intense/"
	},
	module: {
	  loaders: [
		      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
     	]
	}
}
