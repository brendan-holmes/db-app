// Do not bundle node_modules dependencies
var nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: './server.js',
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "main.js", // string
    // the filename template for entry chunks
    //publicPath: "/assets/", // string
    // the url to the output directory resolved relative to the HTML page
    //library: "MyLibrary", // string,
    // the name of the exported library
    //libraryTarget: "umd", // universal module definition
    // the type of the exported library
    /* Advanced output configuration (click to show) */
    /* Expert output configuration (on own risk) */
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },
};