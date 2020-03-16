/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-02-11 16:13:25
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-16 16:04:40
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

import services from "./js/services/services";

import filters from "./js/filters/filters";

import directives from "./js/directives/directives";

import constants from "./js/constants/constants";

angular.module('app', ['ui.router', oclazyload, 'ui.bootstrap', services.name, filters.name, directives.name, constants.name])
  .run(run)
  .config(config)
  .config(router)
  .controller('AppController', AppController)