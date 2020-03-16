/*
 * @Description: 路由
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-03 18:23:06
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-16 14:26:33
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
  $urlRouterProvider.otherwise('/access/login');

  $stateProvider
    .state('access', {
      url: '/access',
      template: '<div ui-view class="fade-in-right-big smooth"></div>'
    })
    .state('access.login', {
      url: '/login',
      template: require('./controllers/access/login/login.template.html').default,
      controller: 'LoginController',
      controllerAs: 'vm',
      resolve: {
        loadLoginController: ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/access/login/login']);
        }
      }
    })
    .state('app', {
      abstract: true,
      url: '/app',
      template: require('./controllers/app/app.template.html').default
    })
    .state('app.dashboard', {
      url: '/dashboard',
      template: require('./controllers/app/dashboard/dashboard.template.html').default,
      resolve: {
        loadLoginController: ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/app/dashboard/dashboard']);
        }
      }
    })
    .state('apps', {
      abstract: true,
      url: '/apps',
      template: require('./controllers/apps/layout.html').default
    })
    .state('apps.note', {
      url: '/note',
      template: require('./controllers/apps/note/note.template.html').default,
      resolve: {
        loadNoteController: ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/apps/note/note']);
        }
      }
    })
    .state('apps.contact', {
      url: '/contact',
      template: require('./controllers/apps/contact/contact.template.html').default,
      resolve: {
        loadContactController: ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/apps/contact/contact']);
        }
      }
    })
}];

export default router;