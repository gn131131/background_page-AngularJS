/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-16 14:13:05
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-16 15:24:27
 */

export default angular.module('apps.contact.controller', [])
  .controller('ContactCtrl', ['$scope', '$http', '$filter', 'DATA_BASE', function ($scope, $http, $filter, DATA_BASE) {
    $scope.items = DATA_BASE.contact.items;
    angular.forEach($scope.items, (item) => {
      item.avatar = $scope.commonImages.a0;
    });
    $scope.item = $filter('orderBy')($scope.items, 'first')[0];
    $scope.item.selected = true;

    $scope.filter = '';
    $scope.groups = [{
        name: '工作'
      },
      {
        name: '家庭'
      },
      {
        name: '朋友'
      },
      {
        name: '队友'
      },
      {
        name: '小组'
      }
    ];

    $scope.createGroup = function () {
      var group = {
        name: 'New Group'
      };
      group.name = $scope.checkItem(group, $scope.groups, 'name');
      $scope.groups.push(group);
    };

    $scope.checkItem = function (obj, arr, key) {
      var i = 0;
      angular.forEach(arr, function (item) {
        if (item[key].indexOf(obj[key]) == 0) {
          var j = item[key].replace(obj[key], '').trim();
          if (j) {
            i = Math.max(i, parseInt(j) + 1);
          } else {
            i = 1;
          }
        }
      });
      return obj[key] + (i ? ' ' + i : '');
    };

    $scope.deleteGroup = function (item) {
      $scope.groups.splice($scope.groups.indexOf(item), 1);
    };

    $scope.selectGroup = function (item) {
      angular.forEach($scope.groups, function (item) {
        item.selected = false;
      });
      $scope.group = item;
      $scope.group.selected = true;
      $scope.filter = item.name;
    };

    $scope.selectItem = function (item) {
      angular.forEach($scope.items, function (item) {
        item.selected = false;
        item.editing = false;
      });
      $scope.item = item;
      $scope.item.selected = true;
    };

    $scope.deleteItem = function (item) {
      $scope.items.splice($scope.items.indexOf(item), 1);
      $scope.item = $filter('orderBy')($scope.items, 'first')[0];
      if ($scope.item) $scope.item.selected = true;
    };

    $scope.createItem = function () {
      var item = {
        group: 'Friends',
        avatar: $scope.commonImages.a0
      };
      $scope.items.push(item);
      $scope.selectItem(item);
      $scope.item.editing = true;
    };

    $scope.editItem = function (item) {
      if (item && item.selected) {
        item.editing = true;
      }
    };

    $scope.doneEditing = function (item) {
      item.editing = false;
    };

  }]);