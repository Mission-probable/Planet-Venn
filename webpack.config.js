const path = require('path');

module.exports = {
  // sets entry point
  entry: path.join(__dirname, '/app/app.js'),

  // designates file to output plain compiled JavaScript
  output: {
    // path: path.join(__dirname, '/client/dist/js'),
    path: path.join(__dirname, '/public/'),
    // filename: 'app.js',
    filename: "bundle.js"
  },

  // desribes transformations
  module: {
    // works with files with an .js or .jsx extension
    loaders: [{
      test: /\.jsx?$/,
      // processes files in src folder
      include: path.join(__dirname, '/app/'),
      loader: 'babel-loader',
      query: {
        // specifies transformations
        presets: ["react", "es2015"]
      }
    }],
  },

  // starts Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true,

  // lets us debug our react code in Chrome dev tools
  devtool: "eval-source-map"
};
