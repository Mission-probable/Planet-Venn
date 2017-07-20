const path = require('path');

module.exports = {

    // sets entry point 
    entry: path.join(__dirname, '/client/src/app.js'),
 
    // designates file to output plain compiled JavaScript 
    output: {
        filename: "public/bundle.js"
    },

    // desribes transformations
    module: {
        loaders: [
            {
                // works with files with an .js or .jsx extension
                test: /\.jsx?$/,
                // processes files in our app folder
                include: path.join(__dirname, '/client/src'),
                loader: "babel-loader",
                query: {
                    // specifies transformations 
                    presets: ["react", "es2015"]
                }
            }
        ]
    },
    // lets us debug our react code in Chrome dev tools
    devtool: "eval-source-map",
    /*test for auth*/
    resolve: {
        extensions: ['.js', '.jsx']
    },
    watch: false
};
