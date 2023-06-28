// I'm importing the path module from Node.js. This module provides utilities for working with file and directory paths.
const path = require('path');

module.exports = {
  // 'entry' tells webpack where to start the bundling process. 
  // In this case, I've chosen the index.js file in the 'src' directory as the entry point.
  entry: './src/index.js',

  output: {
    // 'filename' defines the name of the output bundle created by webpack. 
    // Here, I'm naming the bundle as 'bundle.js'.
    filename: 'bundle.js',

    // 'path' specifies where to output the bundle. 
    // path.resolve() method is used to resolve a sequence of path segments into an absolute path. 
    // Here, it's pointing to a directory named 'dist' in the current directory.
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        // Here, it's looking for all files that end in '.css'.
        test: /\.css$/i,

        // 'use' is an array of loaders to use. Loaders are transformations that are applied on a file in our app.
        // 'style-loader' injects styles into the DOM. 'css-loader' interprets @import and url() like import/require() and will resolve them.
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
