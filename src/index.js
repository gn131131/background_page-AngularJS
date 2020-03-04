/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-02-11 16:13:25
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-04 14:02:39
 */
"use strict";

import "./vendor/flexble/base.css";
import "./vendor/flexble/flexible";

import "./style.css";

import angular from "angular";
import uirouter from "angular-ui-router";
import oclazyload from "oclazyload";

let myApp = angular.module('app', [uirouter, oclazyload]);

export default myApp;