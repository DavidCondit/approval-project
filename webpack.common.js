const path = require('path');

module.exports = {
  entry: './src/scripts/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },  
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};