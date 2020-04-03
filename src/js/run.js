/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-10 18:29:44
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-04-03 18:31:15
 */
const run = ['$templateCache', '$rootScope', '$state', '$stateParams', '$httpBackend', ($templateCache, $rootScope, $state, $stateParams, $httpBackend) => {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  $templateCache.put('header.html', require('../templates/header.html').default);
  $templateCache.put('aside.html', require('../templates/aside.html').default);
  $templateCache.put('settings.html', require('../templates/settings.html').default);
  $templateCache.put('nav.html', require('../templates/nav.html').default);
  $templateCache.put('modal.form.html', require('../templates/modal.form.html').default);
  $templateCache.put('modal.html', require('../templates/modal.html').default);

  $httpBackend.when('POST', '/api/a/login').respond(200, {
    "success": true,
    "code": 0,
    "message": "登录成功",
    "data": "登录成功"
  });

  // whitelisted real requests, should come last
  angular.forEach(['GET', 'DELETE', 'JSONP', 'HEAD', 'PUT', 'POST', 'PATCH'], function (method) {
    $httpBackend.when(method).passThrough();
  });

}];

export default run;