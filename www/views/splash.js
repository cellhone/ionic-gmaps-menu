angular.module('starter')

.controller('SplashCtrl', function($scope, $timeout, $state) {
  var waittime = 3000;
  var t = $timeout(function() {
    //$state.go('map');
  }, waittime);
});