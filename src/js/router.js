/*
 * @Description: 路由
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-03 18:23:06
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-05 11:58:45
 */
const router = ['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      template: require('./controller/home/home.template.html').default,
      controller: 'HomeController',
      controllerAs: 'vm',
      resolve: {
        loadHomeController: ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, './controller/home/home');
        }
      }
    })
    .state('welcome', {
      url: '/welcome',
      template: require('./controller/welcome/welcome.template.html').default,
      controller: 'WelcomeController',
      controllerAs: 'vm',
      resolve: {
        loadWelcomeController: ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, './controller/welcome/welcome');
        }
      }
    })
}];

const ocLazyLoadFn = ($ocLazyLoad, url) => {
  return new Promise((resolve) => {
    import(`${url}`).then(module => {
      $ocLazyLoad.load({
        name: module.default.name
      });
      resolve(module.default.controller);
    });
  });
}

export default router;