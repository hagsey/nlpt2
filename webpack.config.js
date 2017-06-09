const path = require('path');  
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');  

const config =  {  
  entry: path.join(__dirname, './assets/js/webpack.entry.js')
  ,

  output: {
      path: __dirname + '/assets/dist',
      filename: 'bundle.js'
  },

  module: {
    rules: [
        {
            test: /\.(ttf|eot|woff)(\?.*)?$/,
            use: ['url-loader']
        },
        {
            test: /\.(svg)(\?.*)?$/,
            use: ['url-loader', 'svgo-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{loader: 'eslint-loader'}]
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        }
    ]
  }
};

module.exports = config;