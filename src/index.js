/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-02-11 16:13:25
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-05 16:07:44
 */
"use strict";

import "./vendor/flexble/base.css";
import "./vendor/flexble/flexible";

import "./style.css";

import uirouter from "angular-ui-router";
import oclazyload from "oclazyload";

import config from "./js/config";
import router from "./js/router";

angular.module('app', [uirouter, oclazyload]).config(config).config(router);