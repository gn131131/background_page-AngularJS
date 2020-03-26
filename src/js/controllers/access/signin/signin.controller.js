/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-04 14:41:52
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-20 15:09:27
 */
export default angular
  .module('access.signin.controller', [])
  .controller('SigninController', ['$scope', '$state', '$timeout', 'DATA_BASE', 'ajax', function ($scope, $state, $timeout, DATA_BASE, ajax) {
    let vm = this;

    vm.signin = () => {
      if (vm.username === DATA_BASE.signin.username && vm.password === DATA_BASE.signin.password) {
        // eg.post请求发送
        ajax.signin({name: vm.username, pwd: vm.password}).then((res) => {});
        
        $state.go('app.dashboard');
      } else {
        if (vm.username !== DATA_BASE.signin.username) {
          vm.authError = DATA_BASE.signin.authError.username;
        } else if (vm.password !== DATA_BASE.signin.password) {
          vm.authError = DATA_BASE.signin.authError.password;
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