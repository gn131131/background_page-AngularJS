/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-04 14:41:52
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-16 16:11:10
 */
// import { login } from "../../../constants/database";

export default angular
  .module('access.login.controller', [])
  .controller('LoginController', ['$scope', '$state', '$timeout', 'DATA_BASE', function ($scope, $state, $timeout, DATA_BASE) {
    let vm = this;

    vm.login = () => {
      if (vm.username === DATA_BASE.login.username && vm.password === DATA_BASE.login.password) {
        $state.go('app.dashboard');
      } else {
        if (vm.username !== DATA_BASE.login.username) {
          vm.authError = DATA_BASE.login.authError.username;
        } else if (vm.password !== DATA_BASE.login.password) {
          vm.authError = DATA_BASE.login.authError.password;
        }

        if (!vm.timeout) {
          vm.timeout = true;
          $timeout(() => {
            vm.authError = '';
            vm.timeout = false;
          }, 2000);
        }
      }
    };
    
  }]);