/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-08 21:45:26
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-11 15:57:42
 */
const appCtrl = ['$scope', '$window', '$templateCache',
  function ($scope, $window, $templateCache) {
    // add 'ie' classes to html
    var isIE = !!navigator.userAgent.match(/MSIE/i);
    isIE && angular.element($window.document.body).addClass('ie');
    isSmartDevice($window) && angular.element($window.document.body).addClass('smart');

    // config
    $scope.app = {
      name: '后台管理系统',
      subName: 'Web app framework base on Bootstrap and AngularJS',
      version: '1.3.3',
      // for chart colors
      color: {
        primary: '#7266ba',
        info: '#23b7e5',
        success: '#27c24c',
        warning: '#fad733',
        danger: '#f05050',
        light: '#e8eff0',
        dark: '#3a3f51',
        black: '#1c2b36'
      },
      settings: {
        themeID: 1,
        navbarHeaderColor: 'bg-black',
        navbarCollapseColor: 'bg-white-only',
        asideColor: 'bg-black',
        headerFixed: true,
        asideFixed: false,
        asideFolded: false,
        asideDock: false,
        container: false
      },
      img: {
        logo: require('../../../assets/images/logo.png').default,
        a0: require('../../../assets/images/a0.jpg').default,
        a1: require('../../../assets/images/a1.jpg').default,
        a2: require('../../../assets/images/a2.jpg').default,
        a3: require('../../../assets/images/a3.jpg').default,
        a4: require('../../../assets/images/a4.jpg').default,
        a5: require('../../../assets/images/a5.jpg').default,
        a6: require('../../../assets/images/a6.jpg').default,
        a7: require('../../../assets/images/a7.jpg').default,
        a8: require('../../../assets/images/a8.jpg').default,
        a9: require('../../../assets/images/a9.jpg').default,
        a10: require('../../../assets/images/a10.jpg').default,

      }
    }

    // save settings to local storage
    if (angular.isDefined(localStorage.settings)) {
      $scope.app.settings = JSON.parse(localStorage.settings);
    } else {
      localStorage.settings = JSON.stringify($scope.app.settings);
    }
    $scope.$watch('app.settings', function () {
      if ($scope.app.settings.asideDock && $scope.app.settings.asideFixed) {
        // aside dock and fixed must set the header fixed.
        $scope.app.settings.headerFixed = true;
      }
      // save to local storage
      localStorage.settings = JSON.stringify($scope.app.settings);
    }, true);

    function isSmartDevice($window) {
      // Adapted from http://www.detectmobilebrowsers.com
      var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
      // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
      return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
    }

  }
];

export default appCtrl;