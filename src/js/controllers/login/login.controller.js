/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-04 14:41:52
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-09 18:26:11
 */
import { login } from "../../database";
import { objectIsNotEmpty } from "../../utils/utils"

export default angular
  .module('login.controller', [])
  .controller('LoginController', ['$scope', '$state', function ($scope, $state) {
    console.log($scope.app)
    const vm = this;

    vm.wrong = {
      username: false,
      password: false
    };

    vm.background = Math.ceil(Math.random() * 3);
    
    vm.login = () => {
      if (vm.username === login.username && vm.password === login.password) {
        $state.go('welcome');
      } else if (objectIsNotEmpty(vm.username)) {
        vm.wrong['username'] = true;
        if (objectIsNotEmpty(vm.password)) {
          vm.wrong['password'] = true;
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