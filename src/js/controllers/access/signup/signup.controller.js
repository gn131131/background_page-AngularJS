/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-25 11:17:14
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-25 11:18:44
 */
'use strict';

// signup controller
export default angular.module('access.signup.controller', [])
  .controller('SignupFormController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.signup = function () {
      $scope.authError = null;
      // Try to create
      $http.post('api/signup', {
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then(function (response) {
          if (!response.data.user) {
            $scope.authError = response;
          } else {
            $state.go('app.dashboard-v1');
          }
        }, function (x) {
          $scope.authError = 'Server Error';
        });
    };
  }]);