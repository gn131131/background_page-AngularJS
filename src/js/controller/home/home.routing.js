/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-04 16:59:24
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-04 17:32:29
 */
import angular from "angular";

export default angular
  .module('home.routing', [])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        template: require('./home.template.html').default,
        controller: 'HomeController as vm',
        resolve: {
          loadHomeController: ($q, $ocLazyLoad) => {
            return $q((resolve) => {
              require.ensure([], () => {
                // load whole module
                let module = require('./home').default;
                $ocLazyLoad.load({
                  name: module.name
                });
                resolve(module.controller);
              });
            });
          }
        }
      })
  });