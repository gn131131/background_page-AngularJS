/*
 * @Description: 路由
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-03 18:23:06
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-04 17:08:02
 */
const router = ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  'ngInject';  //注入服务 就不需要使用$inject了
  $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateProvider: ($q) => {
        let deferred = $q.defer();
        require.ensure([], () => {
          let template = require('./controller/home/welcomeTemplate.html');
          deferred.resolve(template);
        });
        return deferred.promise;
      },
      controller: "WelcomeCtrl",
      controllerAs: "vm",
      resolve: {
        loadMyCtrl: ($q, $ocLazyLoad) => {
          'ngInject';
          let deferred = $q.defer();
          require.ensure([], () => {
            let module = require("./controller/home/welcome.routing").default;
            $ocLazyLoad.load({
              name: module.name
            });
            deferred.resolve(module.controller)
          });
          return deferred.promise;
        }
      }
    });

  $urlRouterProvider
    .otherwise('/welcome');
}];

export default router;