/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-20 14:55:01
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-20 14:55:02
 */
export default angular.module('ajaxService', [])
  .factory('ajax', ['$http', 'path', ($http, path) => {
    return {
      login(params) {
        return $http.post(path.login, params);
      }
    }
  }]);