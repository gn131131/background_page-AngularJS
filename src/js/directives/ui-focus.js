/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-11 19:54:18
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-11 20:19:37
 */
const uiFocus = ['$timeout', '$parse', function($timeout, $parse) {
  return {
    link: function(scope, element, attr) {
      var model = $parse(attr.uiFocus);
      scope.$watch(model, function(value) {
        if(value === true) {
          $timeout(function() {
            element[0].focus();
          });
        }
      });
      element.bind('blur', function() {
         scope.$apply(model.assign(scope, false));
      });
    }
  };
}];

export default uiFocus;