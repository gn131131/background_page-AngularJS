/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-11 19:54:18
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-16 17:36:46
 */
const uiButterbar = ['$rootScope', '$anchorScroll', function ($rootScope, $anchorScroll) {
  return {
    restrict: 'AC',
    template: '<span class="bar"></span>',
    link: function (scope, el, attrs) {
      el.addClass('butterbar hide');
      scope.$on('$stateChangeStart', function (event) {
        $anchorScroll();
        el.removeClass('hide').addClass('active');
      });
      scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
        event.targetScope.$watch('$viewContentLoaded', function () {
          el.addClass('hide').removeClass('active');
        })
      });
    }
  };
}];

export default uiButterbar;