/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-04 14:41:52
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-04 15:04:43
 */
import myApp from "../../../index";

myApp.controller('welcomeCtrl', ['$scope', function ($scope) {
  $scope.text = 'welcome';
}]);