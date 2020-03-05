/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-04 14:41:52
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-05 16:50:08
 */
export default angular
  .module('login.controller', [])
  .controller('LoginController', ['$scope', function ($scope) {
    $scope.background = Math.ceil(Math.random() * 3);

    $scope.deleteInput = (type) => {
      switch (type) {
        case 'username': $scope.username = '';break;
        case 'password': $scope.password = '';break;
      }
    };
  }]);