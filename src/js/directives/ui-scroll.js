/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-11 19:54:18
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-11 20:22:29
 */
const uiScroll = ['$location', '$anchorScroll', function($location, $anchorScroll) {
  return {
    restrict: 'AC',
    link: function(scope, el, attr) {
      el.on('click', function(e) {
        $location.hash(attr.uiScroll);
        $anchorScroll();
      });
    }
  };
}];

export default uiScroll;