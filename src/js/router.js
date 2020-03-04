/*
 * @Description: 路由
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-03 18:23:06
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-04 17:47:35
 */
const router = ['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      template: require('./controller/home/home.template.html').default,
      controller: 'HomeController as vm',
      resolve: {
        loadHomeController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('./controller/home/home').default;
              $ocLazyLoad.load({
                name: module.name
              });
              resolve(module.controller);
            });
          });
        }
      }
    })
    .state('welcome', {
      url: '/welcome',
      template: require('./controller/welcome/welcome.template.html').default,
      controller: 'WelcomeController as vm',
      resolve: {
        loadWelcomeController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('./controller/welcome/welcome').default;
              $ocLazyLoad.load({
                name: module.name
              });
              resolve(module.controller);
            });
          });
        }
      }
    })
}];

export default router;