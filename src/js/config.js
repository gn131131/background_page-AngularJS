/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-03 19:50:27
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-19 14:57:32
 */
const config = ['$locationProvider', '$ocLazyLoadProvider', ($locationProvider, $ocLazyLoadProvider) => {
  $locationProvider.html5Mode(true);

  // 加载angular.js插件，name为相应module的name（一一对应只是方便查看）
  $ocLazyLoadProvider.config({
    debug: false,
    events: false,
    modules: [{
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