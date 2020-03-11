/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-11 19:54:18
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-11 20:20:23
 */
const uiFullscreen = ['uiLoad', '$document', '$window', function(uiLoad, $document, $window) {
  return {
    restrict: 'AC',
    template:'<i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i>',
    link: function(scope, el, attr) {
      el.addClass('hide');
      uiLoad.load('vendor/libs/screenfull.min.js').then(function(){
        // disable on ie11
        if (screenfull.enabled && !navigator.userAgent.match(/Trident.*rv:11\./)) {
          el.removeClass('hide');
        }
        el.on('click', function(){
          var target;
          attr.target && ( target = $(attr.target)[0] );            
          screenfull.toggle(target);
        });
        $document.on(screenfull.raw.fullscreenchange, function () {
          if(screenfull.isFullscreen){
            el.addClass('active');
          }else{
            el.removeClass('active');
          }
        });
      });
    }
  };
}];

export default uiFullscreen;