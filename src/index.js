/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-02-11 16:13:25
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-23 14:51:17
 */
"use strict";
import "./style.css";

import oclazyload from "oclazyload";

import run from "./js/run";
import config from "./js/config";
import router from "./js/router";

import AppController from "./js/controllers/app/app.controller";
import BootstrapController from "./js/controllers/app/bootstrap.controller";

import services from "./js/services/services";

import filters from "./js/filters/filters";

import directives from "./js/directives/directives";

import constants from "./js/constants/constants";

import ajaxAddress from "./js/services/ajaxAddress";
import ajaxService from "./js/services/ajaxService";

let app = angular.module('app', ['ui.router', oclazyload, 'ui.bootstrap', 'ngAnimate', 'ngCookies', 'ngResource', 'ngSanitize', 'ngTouch', services.name, filters.name, directives.name, constants.name, ajaxAddress.name, ajaxService.name, BootstrapController.name])
  .config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', ($controllerProvider, $compileProvider, $filterProvider, $provide) => {
    // lazy controller, directive and service
    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;
  }])  
  .run(run)
  .config(config)
  .config(router)
  .controller('AppController', AppController)