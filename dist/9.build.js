(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{2:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=angular.module("access.login.controller",[]).controller("LoginController",["$scope","$state","$timeout","DATA_BASE","ajax",function($scope,$state,$timeout,DATA_BASE,ajax){var vm=this;vm.login=function(){vm.username===DATA_BASE.login.username&&vm.password===DATA_BASE.login.password?(ajax.login({name:vm.username,pwd:vm.password}).then(function(res){}),$state.go("app.dashboard")):(vm.username!==DATA_BASE.login.username?vm.authError=DATA_BASE.login.authError.username:vm.password!==DATA_BASE.login.password&&(vm.authError=DATA_BASE.login.authError.password),vm.timeout||(vm.timeout=!0,$timeout(function(){vm.authError="",vm.timeout=!1},2e3)))}}])}}]);