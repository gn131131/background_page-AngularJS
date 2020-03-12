/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-02-11 16:13:25
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-12 14:43:10
 */
"use strict";

import "./vendor/flexble/base.css";
import "./vendor/flexble/flexible";

import "./style.css";

import oclazyload from "oclazyload";

import run from "./js/run";
import config from "./js/config";
import router from "./js/router";

import AppController from "./js/controllers/app/app.controller";

import uiLoad from "./js/services/ui-load";

import jqConfig from "./js/constants/jqConfig";

import setNgAnimate from "./js/directives/setnganimate";
import uiButterbar from "./js/directives/ui-butterbar";
import uiFocus from "./js/directives/ui-focus";
import uiFullscreen from "./js/directives/ui-fullscreen";
import uiJq from "./js/directives/ui-jq";
import uiModule from "./js/directives/ui-module";
import uiNav from "./js/directives/ui-nav";
import uiScroll from "./js/directives/ui-scroll";
import uiShift from "./js/directives/ui-shift";
import uiToggleClass from "./js/directives/ui-toggleclass";
import uiValidate from "./js/directives/ui-validate";

// 'ngAnimate',
//     'ngCookies',
//     'ngResource',
//     'ngSanitize',
//     'ngTouch',
//     'ngStorage',
//     'ui.load',
//     'ui.jq',
//     'ui.validate',

angular.module('app', ['ui.router', oclazyload, 'ui.bootstrap'])
  .run(run)
  .config(config)
  .config(router)
  .controller('AppController', AppController)
  .service('uiLoad', uiLoad)
  .constant('JQ_CONFIG', jqConfig)
  .directive('setNgAnimate', setNgAnimate)
  .directive('uiButterbar', uiButterbar)
  .directive('uiFocus', uiFocus)
  .directive('uiFullscreen', uiFullscreen)
  .value('uiJqConfig', {})
  .directive('uiJq', uiJq)
  .directive('uiModule', uiModule)
  .directive('uiNav', uiNav)
  .directive('uiScroll', uiScroll)
  .directive('uiShift', uiShift)
  .directive('uiToggleClass', uiToggleClass)
  .directive('uiValidate', uiValidate)