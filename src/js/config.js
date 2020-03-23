/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-03 19:50:27
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-23 09:55:21
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
          require('../vendors/modules/ng-grid/ng-grid.min.js').default,
          require('../vendors/modules/ng-grid/ng-grid.min.css').default,
          require('../vendors/modules/ng-grid/theme.css').default
        ]
      },
      {
        name: 'angularBootstrapNavTree',
        files: [
          require('../vendors/modules/angular-bootstrap-nav-tree/abn_tree_directive.js').default,
          require('../vendors/modules/angular-bootstrap-nav-tree/abn_tree.css').default
        ]
      },
      {
        name: 'toaster',
        files: [
          require('../vendors/modules/angularjs-toaster/toaster.js').default,
          require('../vendors/modules/angularjs-toaster/toaster.css').default
        ]
      },
      {
        name: 'angularFileUpload',
        files: [
          require('../vendors/modules/angular-file-upload/angular-file-upload.min.js').default
        ]
      },
      {
        name: 'ngImgCrop',
        files: [
          require('../vendors/modules/ngImgCrop/ng-img-crop.js').default,
          require('../vendors/modules/ngImgCrop/ng-img-crop.css').default
        ]
      },
      {
        name: 'ui.select',
        files: [
          require('../vendors/modules/angular-ui-select/select.min.js').default,
          require('../vendors/modules/angular-ui-select/select.min.css').default
        ]
      },
      {
        name: 'textAngular',
        files: [
          require('../vendors/modules/textAngular/textAngular-sanitize.min.js').default,
          require('../vendors/modules/textAngular/textAngular.min.js').default
        ]
      },
    ]
  });
}];

export default config;