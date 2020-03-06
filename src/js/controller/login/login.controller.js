/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-04 14:41:52
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-06 13:40:14
 */
import { login } from "../../database";

export default angular
  .module('login.controller', [])
  .controller('LoginController', ['$scope', function ($scope) {
    $scope.wrong = [false, false];

    $scope.background = Math.ceil(Math.random() * 3);
    
    $scope.login = () => {
      if ($scope.username === login.username && $scope.password === login.password) {
        console.log('登录成功');
      } else if ($scope.username || $scope.password) {
        $scope.wrong[0] = true;
        $scope.wrong[1] = true;
      }
    };
  }]);