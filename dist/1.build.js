(window.webpackJsonp=window.webpackJsonp||[]).push([[1,3],[function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"login",function(){return login});var login={username:"admin",password:"123456",authError:{username:"用户名错误",password:"密码错误"}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _constants_database__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);__webpack_exports__.default=angular.module("access.login.controller",[]).controller("LoginController",["$scope","$state","$timeout",function($scope,$state,$timeout){var vm=this;vm.login=function(){vm.username===_constants_database__WEBPACK_IMPORTED_MODULE_0__.login.username&&vm.password===_constants_database__WEBPACK_IMPORTED_MODULE_0__.login.password?$state.go("app.dashboard"):(vm.username!==_constants_database__WEBPACK_IMPORTED_MODULE_0__.login.username?vm.authError=_constants_database__WEBPACK_IMPORTED_MODULE_0__.login.authError.username:vm.password!==_constants_database__WEBPACK_IMPORTED_MODULE_0__.login.password&&(vm.authError=_constants_database__WEBPACK_IMPORTED_MODULE_0__.login.authError.password),vm.timeout||(vm.timeout=!0,$timeout(function(){vm.authError="",vm.timeout=!1},2e3)))}}])}]]);