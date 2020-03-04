/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-03 19:59:49
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-04 15:53:26
 */
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const merge = require("webpack-merge");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const WebpackManifestPlugin = require("webpack-manifest-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new WebpackManifestPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true,
        uglifyOptions: {
          mangle: false,
          compress: true
        }
      })
    ]
  }
});