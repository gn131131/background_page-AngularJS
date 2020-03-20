/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-20 14:54:48
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-20 14:54:50
 */
const target = '/ajax';
export default angular.module('ajaxAddress', [])
  .factory('path', [() => {
    return {
      login: target + '/a/login'
    }
  }]);