/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-04 14:41:52
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-04-03 18:32:04
 */
export default angular
  .module('access.signin.controller', [])
  .controller('SigninController', ['$scope', '$state', '$timeout', 'DATA_BASE', 'ajax', function ($scope, $state, $timeout, DATA_BASE, ajax) {
    let vm = this;

    vm.username = DATA_BASE.signin.username;
    vm.password = DATA_BASE.signin.password

    vm.signin = () => {
      // eg.post请求发送
      ajax.signin({name: vm.username, pwd: vm.password}).then((res) => {
        console.log('请求mock res：', res)
        if (res.data.code === 0) {
          $state.go('app.dashboard');
        } else {
          vm.authError = res.data.message;
  
          if (!vm.timeout) {
            vm.timeout = true;
            $timeout(() => {
              vm.authError = '';
              vm.timeout = false;
            }, 2000);
          }
        }
      });
    };
    
  }]);