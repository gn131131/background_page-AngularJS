/*
 * @Description: 路由
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-03 18:23:06
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-04 15:22:14
 */
import myApp from "../index";

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .otherwise('/home');

  $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: './controller/welcome/welcomeTemplate.html',
      controller: 'welcomeCtrl',
      resolve: {
        loadMyService: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load('./controller/welcome/welcomeCtrl.js'); // 按需加载目标 js file
        }]
      }
    });
}]);