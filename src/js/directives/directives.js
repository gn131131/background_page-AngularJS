/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-16 15:53:50
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-17 17:06:56
 */
import setNgAnimate from "./setnganimate";
import uiButterbar from "./ui-butterbar";
import uiFocus from "./ui-focus";
import uiFullscreen from "./ui-fullscreen";
import uiJq from "./ui-jq";
import uiModule from "./ui-module";
import uiNav from "./ui-nav";
import uiScroll from "./ui-scroll";
import uiShift from "./ui-shift";
import uiToggleClass from "./ui-toggleclass";
import uiValidate from "./ui-validate";

export default angular.module('app.directives', [])
  .directive('setNgAnimate', setNgAnimate)
  .directive('uiButterbar', uiButterbar)
  .directive('uiFocus', uiFocus)
  .directive('uiFullscreen', uiFullscreen)
  .value('uiJqConfig', {})
  .directive('uiJq', uiJq)
  .directive('uiModule', uiModule)
  .directive('uiNav', uiNav)
  .directive('uiScroll', uiScroll)
  .directive('uiShift', uiShift)
  .directive('uiToggleClass', uiToggleClass)
  .directive('uiValidate', uiValidate)