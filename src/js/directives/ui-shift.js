/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-11 19:54:18
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-11 20:23:01
 */
const uiShift = ['$timeout', function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, el, attr) {
      // get the $prev or $parent of this el
      var _el = $(el),
          _window = $(window),
          prev = _el.prev(),
          parent,
          width = _window.width()
          ;

      !prev.length && (parent = _el.parent());
      
      function sm(){
        $timeout(function () {
          var method = attr.uiShift;
          var target = attr.target;
          _el.hasClass('in') || _el[method](target).addClass('in');
        });
      }
      
      function md(){
        parent && parent['prepend'](el);
        !parent && _el['insertAfter'](prev);
        _el.removeClass('in');
      }

      (width < 768 && sm()) || md();

      _window.resize(function() {
        if(width !== _window.width()){
          $timeout(function(){
            (_window.width() < 768 && sm()) || md();
            width = _window.width();
          });
        }
      });
    }
  };
}];

export default uiShift;