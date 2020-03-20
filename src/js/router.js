/*
 * @Description: 路由
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-03 18:23:06
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-20 18:19:31
 */
const ocLazyLoadFn = ($ocLazyLoad, urls, modules, vendors) => {
  let arr = [];
  if (vendors && vendors.length > 0) {
    vendors.map(item => {
      arr.push(new Promise((resolve) => {
        import(`../vendors/jquery/${item}`).then(() => {
          resolve();
        });
      }));
    });
  }
  if (modules && modules.length > 0) {
    modules.map(item => {
      arr.push(new Promise((resolve) => {
        $ocLazyLoad.load({
          name: item
        });
        resolve();
      }));
    });
  }
  if (urls && urls.length > 0) {
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
  }
  return Promise.all(arr);
};

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
        deps: ['$ocLazyLoad', ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/access/login/login']);
        }]
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
        deps: ['$ocLazyLoad', ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/app/dashboard/dashboard']);
        }]
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
        deps: ['$ocLazyLoad', 'uiLoad', ($ocLazyLoad, uiLoad) => {
          return uiLoad.load([
            'https://cdn.staticfile.org/moment.js/2.24.0/moment.min.js',
            'https://cdn.staticfile.org/moment.js/2.24.0/locale/zh-cn.js'
          ]).then(() => {
            return ocLazyLoadFn($ocLazyLoad, ['./controllers/apps/note/note']);
          });
        }]
      }
    })
    .state('apps.contact', {
      url: '/contact',
      template: require('./controllers/apps/contact/contact.template.html').default,
      resolve: {
        deps: ['$ocLazyLoad', ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/apps/contact/contact']);
        }]
      }
    })
    // ui
    .state('app.ui', {
      url: '/ui',
      template: '<div ui-view class="fade-in-up"></div>'
    })
    .state('app.ui.buttons', {
      url: '/buttons',
      template: require('./controllers/app/ui/buttons/buttons.template.html').default
    })
    .state('app.ui.icons', {
      url: '/icons',
      template: require('./controllers/app/ui/icons/icons.template.html').default
    })
    .state('app.ui.grid', {
      url: '/grid',
      template: require('./controllers/app/ui/grid/grid.template.html').default
    })
    .state('app.ui.widgets', {
      url: '/widgets',
      template: require('./controllers/app/ui/widgets/widgets.template.html').default
    })
    .state('app.ui.bootstrap', {
      url: '/bootstrap',
      template: require('./controllers/app/ui/bootstrap/bootstrap.template.html').default
    })
    .state('app.ui.sortable', {
      url: '/sortable',
      template: require('./controllers/app/ui/sortable/sortable.template.html').default,
      resolve: {
        deps: ['$ocLazyLoad', ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, [], [], ['sortable/jquery.sortable.js']);
        }]
      }
    })
    .state('app.ui.portlet', {
      url: '/portlet',
      template: require('./controllers/app/ui/portlet/portlet.template.html').default
    })
    .state('app.ui.timeline', {
      url: '/timeline',
      template: require('./controllers/app/ui/timeline/timeline.template.html').default
    })
    .state('app.ui.tree', {
      url: '/tree',
      template: require('./controllers/app/ui/tree/tree.template.html').default,
      resolve: {
        deps: ['$ocLazyLoad', ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/app/ui/tree/tree'], ['angularBootstrapNavTree']);
        }]
      }
    })
    .state('app.ui.toaster', {
      url: '/toaster',
      template: require('./controllers/app/ui/toaster/toaster.template.html').default,
      resolve: {
        deps: ['$ocLazyLoad', ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/app/ui/toaster/toaster'], ['toaster']);
        }]
      }
    })
    // table
    .state('app.table', {
      url: '/table',
      template: '<div ui-view></div>'
    })
    .state('app.table.static', {
      url: '/static',
      template: require('./controllers/app/table/static/static.template.html').default
    })
    .state('app.table.footable', {
      url: '/footable',
      template: require('./controllers/app/table/footable/footable.template.html').default,
    })
    .state('app.table.grid', {
      url: '/grid',
      template: require('./controllers/app/table/grid/grid.template.html').default,
      resolve: {
        deps: ['$ocLazyLoad', ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/app/table/grid/grid'], ['ngGrid']);
        }]
      }
    })
    // form
    .state('app.form', {
      url: '/form',
      template: '<div ui-view class="fade-in"></div>',
      resolve: {
        deps: ['$ocLazyLoad', ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/app/form/form']);
        }]
      }
    })
    .state('app.form.elements', {
      url: '/elements',
      template: require('./controllers/app/form/elements/elements.template.html').default,
      resolve: {
        deps: ['$ocLazyLoad', ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, [], [], ['wysiwyg/bootstrap-wysiwyg.js', 'wysiwyg/jquery.hotkeys.js']);
        }]
      }
    })
    .state('app.form.validation', {
      url: '/validation',
      template: require('./controllers/app/form/validation/validation.template.html').default
    })
    .state('app.form.wizard', {
      url: '/wizard',
      template: require('./controllers/app/form/wizard/wizard.template.html').default
    })
    .state('app.form.fileupload', {
      url: '/fileupload',
      template: require('./controllers/app/form/fileupload/fileupload.template.html').default,
      resolve: {
        deps: ['$ocLazyLoad', ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/app/form/fileupload/fileupload'], ['angularFileUpload']);
        }]
      }
    })
    .state('app.form.imagecrop', {
      url: '/imagecrop',
      template: require('./controllers/app/form/imagecrop/imagecrop.template.html').default,
      resolve: {
        deps: ['$ocLazyLoad', ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/app/form/imagecrop/imagecrop'], ['ngImgCrop']);
        }]
      }
    })
    .state('app.form.select', {
      url: '/select',
      template: require('./controllers/app/form/select/select.template.html').default,
      controller: 'SelectCtrl',
      resolve: {
        deps: ['$ocLazyLoad', 'uiLoad', ($ocLazyLoad, uiLoad) => {
          return uiLoad.load([
            'https://cdn.staticfile.org/angular-ui-select/0.8.3/select.min.js',
            'https://cdn.staticfile.org/angular-ui-select/0.8.3/select.min.css'
          ]).then(() => {
            return ocLazyLoadFn($ocLazyLoad, ['./controllers/app/form/select/select']);
          });
        }]
      }
    })
    .state('app.form.slider', {
      url: '/slider',
      template: require('./controllers/app/form/slider/slider.template.html').default,
      controller: 'SliderCtrl',
      resolve: {
        deps: ['$ocLazyLoad', ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/app/form/slider/slider']);
        }]
      }
    })
    .state('app.form.editor', {
      url: '/editor',
      template: require('./controllers/app/form/editor/editor.template.html').default,
      controller: 'EditorCtrl',
      resolve: {
        deps: ['$ocLazyLoad', ($ocLazyLoad) => {
          return ocLazyLoadFn($ocLazyLoad, ['./controllers/app/form/editor/editor'], ['textAngular']);
        }]
      }
    })
}];

export default router;