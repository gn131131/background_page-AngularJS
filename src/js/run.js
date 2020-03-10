/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-03 19:50:27
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-10 20:04:58
 */
const run = ['$templateCache', ($templateCache) => {
  $templateCache.put('header.html', require('../templates/header.html').default);
  $templateCache.put('aside.html', require('../templates/aside.html').default);
  $templateCache.put('settings.html', require('../templates/settings.html').default);
  $templateCache.put('nav.html', require('../templates/nav.html').default);
}];

export default run;