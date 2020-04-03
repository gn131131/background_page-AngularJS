/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-20 14:55:01
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-04-03 17:32:04
 */
export default angular.module('ajaxService', [])
  .factory('ajax', ['$http', 'path', ($http, path) => {
    return {
      signin(params) {
        return $http.post(path.signin, params);
      }
    }
  }]);