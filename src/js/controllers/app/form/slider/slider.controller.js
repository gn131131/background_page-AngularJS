/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-20 16:51:30
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-20 16:58:44
 */
export default angular.module('app.form.slider.controller', [])
  .controller('SliderCtrl', function ($scope) {
    $scope.slider = {
      min: 10,
      max: 60,
      value: 40,
      options: {
        floor: 0,
        ceil: 100
      }
    };
  });