(window.webpackJsonp=window.webpackJsonp||[]).push([[16],[function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=angular.module("access.signin.controller",[]).controller("SigninController",["$scope","$state","$timeout","DATA_BASE","ajax",function($scope,$state,$timeout,DATA_BASE,ajax){var vm=this;vm.signin=function(){vm.username===DATA_BASE.signin.username&&vm.password===DATA_BASE.signin.password?(ajax.signin({name:vm.username,pwd:vm.password}).then(function(res){}),$state.go("app.dashboard")):(vm.username!==DATA_BASE.signin.username?vm.authError=DATA_BASE.signin.authError.username:vm.password!==DATA_BASE.signin.password&&(vm.authError=DATA_BASE.signin.authError.password),vm.timeout||(vm.timeout=!0,$timeout(function(){vm.authError="",vm.timeout=!1},2e3)))}}])}]]);