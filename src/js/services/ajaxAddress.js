/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-20 14:54:48
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-20 14:54:50
 */
const target = '/api'; // ；拦截名，要与webpack.dev.js中设置一样
export default angular.module('ajaxAddress', [])
  .factory('path', [() => {
    return {
      signin: target + '/a/login'
    }
  }]);