/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-03 19:50:27
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-17 17:44:06
 */
const config = ['$locationProvider', '$ocLazyLoadProvider', ($locationProvider, $ocLazyLoadProvider) => {
  $locationProvider.html5Mode(true);

  $ocLazyLoadProvider.config({
    debug: false,
    events: true,
    modules: [
      {
        name: 'angularBootstrapNavTree',
        files: [
          require('../vendor/angular-bootstrap-nav-tree/abn_tree_directive.js').default,
          require('../vendor/angular-bootstrap-nav-tree/abn_tree.css').default
        ]
      }
    ]
  });
}];

export default config;