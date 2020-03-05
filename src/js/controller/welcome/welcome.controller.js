/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-04 14:41:52
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-04 17:30:53
 */
export default angular
  .module('welcome.controller', [])
  .controller('WelcomeController', ['$scope', function ($scope) {
    $scope.text = "welcome controller";
  }]);