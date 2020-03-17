/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-10 18:29:44
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-17 11:52:05
 */
const run = ['$templateCache', '$rootScope', '$state', '$stateParams', ($templateCache, $rootScope, $state, $stateParams) => {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;  

  $templateCache.put('header.html', require('../templates/header.html').default);
  $templateCache.put('aside.html', require('../templates/aside.html').default);
  $templateCache.put('settings.html', require('../templates/settings.html').default);
  $templateCache.put('nav.html', require('../templates/nav.html').default);
}];

export default run;