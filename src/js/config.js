/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-03 19:50:27
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-19 17:08:12
 */
const config = ['$locationProvider', '$ocLazyLoadProvider', '$httpProvider', ($locationProvider, $ocLazyLoadProvider, $httpProvider) => {
  $locationProvider.html5Mode(true);

  // Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.common["Content-Type"] =
    "application/x-www-form-urlencoded;charset=utf-8";
  $httpProvider.defaults.headers.patch["Content-Type"] =
    "application/x-www-form-urlencoded;charset=utf-8";
  $httpProvider.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded;charset=utf-8";
  $httpProvider.defaults.headers.put["Content-Type"] =
    "application/x-www-form-urlencoded;charset=utf-8";

  // set up global transformRequest function
  $httpProvider.defaults.transformRequest = function (data) {
    if (data === undefined) {
      return data;
    }
    return $.param(data);
  };

  // 加载angular.js插件，name为相应module的name（一一对应只是方便查看）
  $ocLazyLoadProvider.config({
    debug: false,
    events: false,
    modules: [{
        name: 'ngGrid',
        files: [
          require('../vendors/ng-grid/ng-grid.min.js').default,
          require('../vendors/ng-grid/ng-grid.min.css').default,
          require('../vendors/ng-grid/theme.css').default
        ]
      },
      {
        name: 'angularBootstrapNavTree',
        files: [
          require('../vendors/angular-bootstrap-nav-tree/abn_tree_directive.js').default,
          require('../vendors/angular-bootstrap-nav-tree/abn_tree.css').default
        ]
      },
      {
        name: 'toaster',
        files: [
          require('../vendors/angularjs-toaster/toaster.js').default,
          require('../vendors/angularjs-toaster/toaster.css').default
        ]
      }
    ]
  });
}];

export default config;