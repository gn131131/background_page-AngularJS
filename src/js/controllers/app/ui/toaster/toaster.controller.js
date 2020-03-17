/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-17 18:15:30
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-17 18:16:35
 */
export default angular.module('app.ui.toaster.controller', [])
  .controller('ToasterDemoCtrl', ['$scope', 'toaster', function($scope, toaster) {
    $scope.toaster = {
        type: 'success',
        title: 'Title',
        text: 'Message'
    };
    $scope.pop = function(){
        toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
    };
}]);