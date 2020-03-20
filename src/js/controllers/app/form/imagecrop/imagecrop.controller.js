/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-20 16:51:30
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-20 16:56:56
 */
export default angular.module('app.form.imagecrop.controller', [])
  .controller('ImgCropCtrl', ['$scope', function ($scope) {
    $scope.myImage = '';
    $scope.myCroppedImage = '';
    $scope.cropType = "circle";

    var handleFileSelect = function (evt) {
      var file = evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function ($scope) {
          $scope.myImage = evt.target.result;
        });
      };
      reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
  }]);