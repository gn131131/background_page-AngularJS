(window.webpackJsonp=window.webpackJsonp||[]).push([[4,19],{33:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _fileupload_controller__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);__webpack_exports__.default=angular.module("app.form.fileupload",[_fileupload_controller__WEBPACK_IMPORTED_MODULE_0__.default.name])},4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=angular.module("app.form.fileupload.controller",[]).controller("FileUploadCtrl",["$scope","FileUploader",function($scope,FileUploader){var uploader=$scope.uploader=new FileUploader({url:"js/controllers/upload.php"});uploader.filters.push({name:"customFilter",fn:function(){return this.queue.length<10}}),uploader.onWhenAddingFileFailed=function(item,filter,options){console.info("onWhenAddingFileFailed",item,filter,options)},uploader.onAfterAddingFile=function(fileItem){console.info("onAfterAddingFile",fileItem)},uploader.onAfterAddingAll=function(addedFileItems){console.info("onAfterAddingAll",addedFileItems)},uploader.onBeforeUploadItem=function(item){console.info("onBeforeUploadItem",item)},uploader.onProgressItem=function(fileItem,progress){console.info("onProgressItem",fileItem,progress)},uploader.onProgressAll=function(progress){console.info("onProgressAll",progress)},uploader.onSuccessItem=function(fileItem,response,status,headers){console.info("onSuccessItem",fileItem,response,status,headers)},uploader.onErrorItem=function(fileItem,response,status,headers){console.info("onErrorItem",fileItem,response,status,headers)},uploader.onCancelItem=function(fileItem,response,status,headers){console.info("onCancelItem",fileItem,response,status,headers)},uploader.onCompleteItem=function(fileItem,response,status,headers){console.info("onCompleteItem",fileItem,response,status,headers)},uploader.onCompleteAll=function(){console.info("onCompleteAll")},console.info("uploader",uploader)}])}}]);