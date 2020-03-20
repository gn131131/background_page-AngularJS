/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-06 14:16:56
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-19 17:22:45
 */
const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8001,
    compress: true,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api/': {
        target: 'http://www.baidu.com',
        changeOrigin: true,
        secure: true
      }
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
