/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-04 14:41:52
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-04 17:30:53
 */
import angular from "angular";

export default angular
  .module('home.controller', [])
  .controller('HomeController', ['$scope', function ($scope) {
    $scope.text = "aaaaaaaab";
  }]);