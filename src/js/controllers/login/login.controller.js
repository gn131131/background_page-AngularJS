/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-04 14:41:52
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-10 13:21:20
 */
import { login } from "../../database";

export default angular
  .module('login.controller', [])
  .controller('LoginController', ['$scope', '$state', '$timeout', function ($scope, $state, $timeout) {
    let vm = this;

    vm.login = () => {
      if (vm.username === login.username && vm.password === login.password) {
        $state.go('welcome');
      } else {
        if (vm.username !== login.username) {
          vm.authError = login.authError.username;
        } else if (vm.password !== login.password) {
          vm.authError = login.authError.password;
        }
        $timeout(() => {
          vm.authError = '';
        }, 2000);
      }
    };
    
  }]);