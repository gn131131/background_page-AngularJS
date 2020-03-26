/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-03 19:59:49
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-26 16:13:43
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
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['!CNAME', '*.build.js'],
      cleanStaleWebpackAssets: false,
      protectWebpackAssets: false
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new WebpackManifestPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          mangle: false,
          parallel: true
        }
      })
    ]
  }
});