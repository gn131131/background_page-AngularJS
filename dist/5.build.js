(window.webpackJsonp=window.webpackJsonp||[]).push([[5],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_exports__.default=["$locationProvider",function($locationProvider){$locationProvider.html5Mode(!0)}]},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var ocLazyLoadFn=function($ocLazyLoad,urls){var arr=[];return urls.map(function(item){arr.push(new Promise(function(resolve){__webpack_require__(34)("".concat(item)).then(function(module){$ocLazyLoad.load({name:module.default.name}),resolve(module.default.controller)})}))}),Promise.all(arr)},router=["$urlRouterProvider","$stateProvider",function($urlRouterProvider,$stateProvider){$urlRouterProvider.otherwise("/login"),$stateProvider.state("login",{url:"/login",template:__webpack_require__(9).default,controller:"LoginController",controllerAs:"vm",resolve:{loadLoginController:function($ocLazyLoad){return ocLazyLoadFn($ocLazyLoad,["./controller/login/login"])}}}).state("welcome",{url:"/welcome",template:__webpack_require__(10).default,controller:"WelcomeController",controllerAs:"vm",resolve:{loadWelcomeController:function($ocLazyLoad){return ocLazyLoadFn($ocLazyLoad,["./controller/welcome/welcome"])}}})}];__webpack_exports__.default=router},,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='\x3c!--\r\n * @Description: \r\n * @Version: 1.0\r\n * @Autor: Pumpking\r\n * @Date: 2020-03-04 14:42:02\r\n * @LastEditors: Pumpking\r\n * @LastEditTime: 2020-03-06 13:35:40\r\n --\x3e\r\n<div class="login-container">\r\n  <h1 class="login-title">AngularJS后台管理系统</h1>\r\n  <form class="login-form">\r\n    <input type="text" name="username" class="login-username" ng-model="username" placeholder="Username">\r\n    <input type="password" name="password" class="login-password" ng-model="password" placeholder="Password">\r\n    <button type="submit" class="login-submit" ng-click="login()">登录</button>\r\n\r\n    <div class="login-error login-error-username" ng-show="wrong[0] && username"><span>+</span></div>\r\n    <div class="login-error login-error-password" ng-show="wrong[1] && password"><span>+</span></div>\r\n  </form>\r\n  <div class="login-background" ng-class="{\'login-background-1\': background === 1, \'login-background-2\': background === 2, \'login-background-3\': background === 3}"></div>\r\n</div>'},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default="\x3c!--\r\n * @Description: \r\n * @Version: 1.0\r\n * @Autor: Pumpking\r\n * @Date: 2020-03-04 14:42:02\r\n * @LastEditors: Pumpking\r\n * @LastEditTime: 2020-03-04 17:48:49\r\n --\x3e\r\n<h1>{{text}}</h1>"},,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(19),__webpack_require__(21);var angular_ui_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),oclazyload__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(11),oclazyload__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(oclazyload__WEBPACK_IMPORTED_MODULE_3__),_js_config__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),_js_router__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6);angular.module("app",[angular_ui_router__WEBPACK_IMPORTED_MODULE_2__.a,oclazyload__WEBPACK_IMPORTED_MODULE_3___default.a]).config(_js_config__WEBPACK_IMPORTED_MODULE_4__.default).config(_js_router__WEBPACK_IMPORTED_MODULE_5__.default)},function(module,exports,__webpack_require__){var api=__webpack_require__(8),content=__webpack_require__(20);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(module.i,content,options),content.locals?content.locals:{});module.exports=exported},function(module,exports,__webpack_require__){(exports=__webpack_require__(4)(!1)).push([module.i,'body,\r\ndl,\r\ndd,\r\nul,\r\nol,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\npre,\r\nform,\r\ninput,\r\ntextarea,\r\np,\r\nhr,\r\nthead,\r\ntbody,\r\ntfoot,\r\nth,\r\ntd {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nul,\r\nol {\r\n  list-style: none;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\nhtml {\r\n  -ms-text-size-adjust: none;\r\n  -webkit-text-size-adjust: none;\r\n  text-size-adjust: none;\r\n}\r\nbody {\r\n  line-height: 1.5;\r\n  font-size: 14px;\r\n}\r\nbody,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font-family: "helvetica neue", tahoma, "hiragino sans gb", stheiti,\r\n    "wenquanyi micro hei", \\5fae\\8f6f\\96c5\\9ed1, \\5b8b\\4f53, sans-serif;\r\n}\r\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\r\ni,\r\nem {\r\n  font-style: normal;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\ntable th,\r\ntable td {\r\n  border: 1px solid #ddd;\r\n  padding: 5px;\r\n}\r\ntable th {\r\n  font-weight: inherit;\r\n  border-bottom-width: 2px;\r\n  border-bottom-color: #ccc;\r\n}\r\nimg {\r\n  border: 0 none;\r\n  width: auto\\9;\r\n  max-width: 100%;\r\n  vertical-align: top;\r\n  height: auto;\r\n}\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  font-size: 100%;\r\n  margin: 0;\r\n  vertical-align: baseline;\r\n}\r\nbutton,\r\nhtml input[type="button"],\r\ninput[type="reset"],\r\ninput[type="submit"] {\r\n  -webkit-appearance: button;\r\n  cursor: pointer;\r\n}\r\nbutton[disabled],\r\ninput[disabled] {\r\n  cursor: default;\r\n}\r\ninput[type="checkbox"],\r\ninput[type="radio"] {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\ninput[type="search"] {\r\n  -webkit-appearance: textfield;\r\n  -moz-box-sizing: content-box;\r\n  -webkit-box-sizing: content-box;\r\n  box-sizing: content-box;\r\n}\r\ninput[type="search"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\ninput:focus {\r\n  outline: none;\r\n}\r\nselect[size],\r\nselect[multiple],\r\nselect[size][multiple] {\r\n  border: 1px solid #aaa;\r\n  padding: 0;\r\n}\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nnav,\r\nsection,\r\nsummary {\r\n  display: block;\r\n}\r\naudio,\r\ncanvas,\r\nvideo,\r\nprogress {\r\n  display: inline-block;\r\n}\r\nbody {\r\n  background: #fff;\r\n}\r\ninput::-webkit-input-speech-button {\r\n  display: none;\r\n}\r\nbutton,\r\ninput,\r\ntextarea {\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n',""]),module.exports=exports},function(module,exports,__webpack_require__){var api=__webpack_require__(8),content=__webpack_require__(22);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(module.i,content,options),content.locals?content.locals:{});module.exports=exported},function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(4),___CSS_LOADER_AT_RULE_IMPORT_0___=__webpack_require__(23),___CSS_LOADER_AT_RULE_IMPORT_1___=__webpack_require__(24),___CSS_LOADER_AT_RULE_IMPORT_2___=__webpack_require__(25),___CSS_LOADER_AT_RULE_IMPORT_3___=__webpack_require__(26);(exports=___CSS_LOADER_API_IMPORT___(!1)).i(___CSS_LOADER_AT_RULE_IMPORT_0___),exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___),exports.i(___CSS_LOADER_AT_RULE_IMPORT_2___),exports.i(___CSS_LOADER_AT_RULE_IMPORT_3___),exports.push([module.i,"",""]),module.exports=exports},function(module,exports,__webpack_require__){(exports=__webpack_require__(4)(!1)).push([module.i,".color-red {\r\n  color: red;\r\n}\r\n",""]),module.exports=exports},function(module,exports,__webpack_require__){(exports=__webpack_require__(4)(!1)).push([module.i,"",""]),module.exports=exports},function(module,exports,__webpack_require__){(exports=__webpack_require__(4)(!1)).push([module.i,'/* @font-face {\r\n  font-family: "MyFont";\r\n  src: url("../font/simkai.ttf");\r\n}\r\n\r\n.font-simkai {\r\n  font-family: "MyFont";\r\n} */\r\n',""]),module.exports=exports},function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(4),___CSS_LOADER_GET_URL_IMPORT___=__webpack_require__(27),___CSS_LOADER_URL_IMPORT_0___=__webpack_require__(28),___CSS_LOADER_URL_IMPORT_1___=__webpack_require__(29),___CSS_LOADER_URL_IMPORT_2___=__webpack_require__(30);exports=___CSS_LOADER_API_IMPORT___(!1);var ___CSS_LOADER_URL_REPLACEMENT_0___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___),___CSS_LOADER_URL_REPLACEMENT_2___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);exports.push([module.i,"body {\r\n  background: #f8f8f8;\r\n  font-family: 'PT Sans', Helvetica, Arial, sans-serif;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n\r\n.login-container {\r\n  margin: 120px auto 0 auto;\r\n}\r\n\r\n.login-title {\r\n  font-size: 30px;\r\n  font-weight: 700;\r\n  text-shadow: 0 1px 4px rgba(0, 0, 0, .2);\r\n}\r\n\r\n.login-form {\r\n  position: relative;\r\n  width: 305px;\r\n  margin: 15px auto 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.login-container input {\r\n  width: 270px;\r\n  height: 42px;\r\n  margin-top: 25px;\r\n  padding: 0 15px;\r\n  background: #2d2d2d;\r\n  /* browsers that don't support rgba */\r\n  background: rgba(45, 45, 45, .15);\r\n  -moz-border-radius: 6px;\r\n  -webkit-border-radius: 6px;\r\n  border-radius: 6px;\r\n  border: 1px solid #3d3d3d;\r\n  /* browsers that don't support rgba */\r\n  border: 1px solid rgba(255, 255, 255, .15);\r\n  -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .1) inset;\r\n  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .1) inset;\r\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .1) inset;\r\n  font-family: 'PT Sans', Helvetica, Arial, sans-serif;\r\n  font-size: 14px;\r\n  color: #fff;\r\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .1);\r\n  -o-transition: all .2s;\r\n  -moz-transition: all .2s;\r\n  -webkit-transition: all .2s;\r\n  -ms-transition: all .2s;\r\n}\r\n\r\n.login-container input:-moz-placeholder {\r\n  color: #fff;\r\n}\r\n\r\n.login-container input:-ms-input-placeholder {\r\n  color: #fff;\r\n}\r\n\r\n.login-container input::-webkit-input-placeholder {\r\n  color: #fff;\r\n}\r\n\r\n.login-container input:focus {\r\n  outline: none;\r\n  -moz-box-shadow:\r\n    0 2px 3px 0 rgba(0, 0, 0, .1) inset,\r\n    0 2px 7px 0 rgba(0, 0, 0, .2);\r\n  -webkit-box-shadow:\r\n    0 2px 3px 0 rgba(0, 0, 0, .1) inset,\r\n    0 2px 7px 0 rgba(0, 0, 0, .2);\r\n  box-shadow:\r\n    0 2px 3px 0 rgba(0, 0, 0, .1) inset,\r\n    0 2px 7px 0 rgba(0, 0, 0, .2);\r\n}\r\n\r\n.login-submit {\r\n  cursor: pointer;\r\n  width: 300px;\r\n  height: 44px;\r\n  margin-top: 25px;\r\n  padding: 0;\r\n  background: #ef4300;\r\n  -moz-border-radius: 6px;\r\n  -webkit-border-radius: 6px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ff730e;\r\n  -moz-box-shadow:\r\n    0 15px 30px 0 rgba(255, 255, 255, .25) inset,\r\n    0 2px 7px 0 rgba(0, 0, 0, .2);\r\n  -webkit-box-shadow:\r\n    0 15px 30px 0 rgba(255, 255, 255, .25) inset,\r\n    0 2px 7px 0 rgba(0, 0, 0, .2);\r\n  box-shadow:\r\n    0 15px 30px 0 rgba(255, 255, 255, .25) inset,\r\n    0 2px 7px 0 rgba(0, 0, 0, .2);\r\n  font-family: 'PT Sans', Helvetica, Arial, sans-serif;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  color: #fff;\r\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .1);\r\n  -o-transition: all .2s;\r\n  -moz-transition: all .2s;\r\n  -webkit-transition: all .2s;\r\n  -ms-transition: all .2s;\r\n}\r\n\r\n.login-submit:hover {\r\n  -moz-box-shadow:\r\n    0 15px 30px 0 rgba(255, 255, 255, .15) inset,\r\n    0 2px 7px 0 rgba(0, 0, 0, .2);\r\n  -webkit-box-shadow:\r\n    0 15px 30px 0 rgba(255, 255, 255, .15) inset,\r\n    0 2px 7px 0 rgba(0, 0, 0, .2);\r\n  box-shadow:\r\n    0 15px 30px 0 rgba(255, 255, 255, .15) inset,\r\n    0 2px 7px 0 rgba(0, 0, 0, .2);\r\n}\r\n\r\n.login-submit:active {\r\n  -moz-box-shadow:\r\n    0 15px 30px 0 rgba(255, 255, 255, .15) inset,\r\n    0 2px 7px 0 rgba(0, 0, 0, .2);\r\n  -webkit-box-shadow:\r\n    0 15px 30px 0 rgba(255, 255, 255, .15) inset,\r\n    0 2px 7px 0 rgba(0, 0, 0, .2);\r\n  box-shadow:\r\n    0 5px 8px 0 rgba(0, 0, 0, .1) inset,\r\n    0 1px 4px 0 rgba(0, 0, 0, .1);\r\n\r\n  border: 0px solid #ef4300;\r\n}\r\n\r\n.login-error {\r\n  position: absolute;\r\n  right: -55px;\r\n  width: 40px;\r\n  height: 40px;\r\n  background: #2d2d2d;\r\n  /* browsers that don't support rgba */\r\n  background: rgba(45, 45, 45, .25);\r\n  -moz-border-radius: 8px;\r\n  -webkit-border-radius: 8px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.login-error-username {\r\n  top: 27px;\r\n}\r\n\r\n.login-error-password {\r\n  top: 96px;\r\n}\r\n\r\n.login-error span {\r\n  display: inline-block;\r\n  margin-left: 2px;\r\n  font-size: 40px;\r\n  font-weight: 700;\r\n  line-height: 40px;\r\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .1);\r\n  -o-transform: rotate(45deg);\r\n  -moz-transform: rotate(45deg);\r\n  -webkit-transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n}\r\n\r\n.login-background {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n}\r\n\r\n.login-background-1 {\r\n  background: url("+___CSS_LOADER_URL_REPLACEMENT_0___+") no-repeat center center / cover;\r\n}\r\n\r\n.login-background-2 {\r\n  background: url("+___CSS_LOADER_URL_REPLACEMENT_1___+") no-repeat center center / cover;\r\n}\r\n.login-background-3 {\r\n  background: url("+___CSS_LOADER_URL_REPLACEMENT_2___+") no-repeat center center / cover;\r\n}",""]),module.exports=exports},,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=__webpack_require__.p+"images/ffaae6281cd7adfd3768b4318e8383c5.jpg"},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=__webpack_require__.p+"images/597fbd0a7bc16307d75c8065ca7589b6.jpg"},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=__webpack_require__.p+"images/a17310883c207097ba42a32154dc205b.jpg"},,,,function(module,exports,__webpack_require__){var map={"./config":[5],"./config.js":[5],"./controller/login/login":[16,0],"./controller/login/login.controller":[14,1],"./controller/login/login.controller.js":[14,1],"./controller/login/login.js":[16,0],"./controller/login/login.template.html":[9],"./controller/welcome/welcome":[17,2],"./controller/welcome/welcome.controller":[15,3],"./controller/welcome/welcome.controller.js":[15,3],"./controller/welcome/welcome.js":[17,2],"./controller/welcome/welcome.template.html":[10],"./database":[13,4],"./database.js":[13,4],"./router":[6],"./router.js":[6]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e});var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function(){return __webpack_require__(id)})}webpackAsyncContext.keys=function(){return Object.keys(map)},webpackAsyncContext.id=34,module.exports=webpackAsyncContext}],[[18,6,7]]]);
//# sourceMappingURL=5.build.js.map?e2d34d4b1598d3790def