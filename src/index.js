/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-02-11 16:13:25
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-11 15:42:10
 */
"use strict";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "./vendor/flexble/base.css";
import "./vendor/flexble/flexible";

import "./style.css";

import uirouter from "angular-ui-router";
import oclazyload from "oclazyload";
import uibootstrap from "angular-ui-bootstrap";

import run from "./js/run";
import config from "./js/config";
import router from "./js/router";

import appCtrl from "./js/controllers/app/app.controller";

// 'ngAnimate',
//     'ngCookies',
//     'ngResource',
//     'ngSanitize',
//     'ngTouch',
//     'ngStorage',
//     'ui.bootstrap',
//     'ui.load',
//     'ui.jq',
//     'ui.validate',

angular.module('app', [uirouter, oclazyload, uibootstrap]).run(run).config(config).config(router).controller('AppCtrl', appCtrl);