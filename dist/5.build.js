(window.webpackJsonp=window.webpackJsonp||[]).push([[5,20],{34:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _form_controller__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5);__webpack_exports__.default=angular.module("app.form",[_form_controller__WEBPACK_IMPORTED_MODULE_0__.default.name])},5:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=angular.module("app.form.controller",[]).controller("FormDemoCtrl",["$scope",function($scope){$scope.notBlackListed=function(value){return-1===["bad@domain.com","verybad@domain.com"].indexOf(value)},$scope.val=15;angular.element("#slider").on("slideStop",function(data){var val;val=data.value,$scope.$apply(function(){$scope.val=val})}),$scope.select2Number=[{text:"First",value:"One"},{text:"Second",value:"Two"},{text:"Third",value:"Three"}],$scope.list_of_string=["tag1","tag2"],$scope.select2Options={multiple:!0,simple_tags:!0,tags:["tag1","tag2","tag3","tag4"]},angular.element("#LinkInput").bind("click",function(event){event.stopPropagation()})}])}}]);