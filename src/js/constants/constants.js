/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-16 16:00:14
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-16 16:01:05
 */
import jqConfig from "./jqConfig";
import database from "./database";

export default angular.module('app.constants', [])
  .constant('JQ_CONFIG', jqConfig)
  .constant('DATA_BASE', database)