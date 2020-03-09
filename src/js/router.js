/*
 * @Description: 路由
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-03 18:23:06
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-05 13:43:53
 */
const ocLazyLoadFn = ($ocLazyLoad, urls) => {
  let arr = [];
  urls.map(item => {
    arr.push(new Promise((resolve) => {
      import(`${item}`).then(module => {
        $ocLazyLoad.load({
          name: module.default.name
        });
        resolve(module.default.controller);
      });
    }));
  });
  return Promise.all(arr);
}

const router = ['$urlRouterProvider', '$stateProvider', ($urlRouterProvider, $stateProvider) => {
  $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('login', {
      url: '/login',
      template: require('./controllers/login/login.template.html').default,
      controller: 'LoginController',
      controllerAs: 'vm',
      resolve: {
        loadLoginController: ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/login/login']);
        }
      }
    })
    .state('welcome', {
      url: '/welcome',
      template: require('./controllers/welcome/welcome.template.html').default,
      controller: 'WelcomeController',
      controllerAs: 'vm',
      resolve: {
        loadWelcomeController: ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/welcome/welcome']);
        }
      }
    })
}];

export default router;