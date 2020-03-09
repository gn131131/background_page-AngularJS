/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-02-11 16:13:25
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-09 21:56:37
 */
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: '[id].build.js?[chunkhash]',
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|ico|bmp|gif)$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: '/img/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      favicon: "./favicon.ico",
      hash: true
    }),
    new HtmlWebpackPlugin({
      filename: "404.html",
      template: "./404.html",
      hash: true
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "initial",
      automaticNameDelimiter: ".",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 1
        }
      }
    },
    runtimeChunk: {
      name: entrypoint => `manifest.${entrypoint.name}`
    }
  }
};