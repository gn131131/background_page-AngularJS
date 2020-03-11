/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-11 19:54:17
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-11 20:18:39
 */
const setNgAnimate = ['$animate', function ($animate) {
  return {
    link: function ($scope, $element, $attrs) {
      $scope.$watch(function () {
        return $scope.$eval($attrs.setNgAnimate, $scope);
      }, function (valnew, valold) {
        $animate.enabled(!!valnew, $element);
      });
    }
  };
}];

export default setNgAnimate;