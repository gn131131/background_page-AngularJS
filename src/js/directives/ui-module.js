/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-11 19:54:18
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-11 20:21:32
 */
const uiModule = ['MODULE_CONFIG','uiLoad', '$compile', function(MODULE_CONFIG, uiLoad, $compile) {
  return {
    restrict: 'A',
    compile: function (el, attrs) {
      var contents = el.contents().clone();
      return function(scope, el, attrs){
        el.contents().remove();
        uiLoad.load(MODULE_CONFIG[attrs.uiModule])
        .then(function(){
          $compile(contents)(scope, function(clonedElement, scope) {
            el.append(clonedElement);
          });
        });
      }
    }
  };
}];

export default uiModule;