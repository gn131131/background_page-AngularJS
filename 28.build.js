(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{12:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=angular.module("app.ui.toaster.controller",[]).controller("ToasterDemoCtrl",["$scope","toaster",function($scope,toaster){$scope.toaster={type:"success",title:"Title",text:"Message"},$scope.pop=function(){toaster.pop($scope.toaster.type,$scope.toaster.title,$scope.toaster.text)}}])}}]);