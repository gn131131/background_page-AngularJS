/*
 * @Description: 路由
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-03 18:23:06
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-04 13:48:49
 */
import myApp from "../index";

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      template: '<h1>{{text}}</h1>',
      controller: function ($scope) {
        $scope.text = 'home'
      }
    })
    .state('news', {
      url: '/news',
      template: '<h1>{{text}}</h1>',
      controller: function ($scope) {
        $scope.text = 'news'
      }
    })
    .state('other', {
      url: '/other',
      views: {
        'view1': {
          template: '<h1>{{text}}</h1>',
          controller: function ($scope) {
            $scope.text = 'view1 text'
          }
        },
        'view2': {
          template: '<h1>{{text}}</h1>',
          controller: function ($scope) {
            $scope.text = 'view2 text'
          }
        },
        'view3': {
          template: '<h1>{{text}}</h1>',
          controller: function ($scope) {
            $scope.text = 'view3 text'
          }
        }
      }
    });
}]);