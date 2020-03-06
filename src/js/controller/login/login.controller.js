/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-04 14:41:52
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-06 23:26:27
 */
import { login } from "../../database";
import { objectIsNotEmpty } from "../../utils/utils"

export default angular
  .module('login.controller', [])
  .controller('LoginController', ['$scope', '$state', function ($scope, $state) {
    $scope.wrong = {
      username: false,
      password: false
    };

    $scope.background = Math.ceil(Math.random() * 3);
    
    $scope.login = () => {
      if ($scope.username === login.username && $scope.password === login.password) {
        $state.go('welcome');
      } else if (objectIsNotEmpty($scope.username)) {
        $scope.wrong['username'] = true;
        if (objectIsNotEmpty($scope.password)) {
          $scope.wrong['password'] = true;
        }
      }
    };

    $scope.hideError = () => {
      $scope.wrong = {
        username: false,
        password: false
      };
    };
  }]);