/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-16 15:41:34
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-16 15:48:02
 */
export default angular.module('app.filters', [])
  .filter('fromNow', function () {
    return function (date) {
      return moment(date).fromNow();
    }
  })