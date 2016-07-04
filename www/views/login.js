angular.module('starter')

.controller('LoginCtrl', function($scope, $window, $localStorage, Fullscreen) {
  $scope.imgsrc="http://xmpp.hplabs.jp/demo/push/lib/avator/makoto.jpg";
  
//  $scope.clickExpand = function() {
//    console.log('clickExpand');
//    if(!isFullscreen) {
//        var body = document.body;
//        if (body.webkitRequestFullScreen) {
//            body.webkitRequestFullScreen();
//        } else if (body.mozRequestFullScreen) {
//            body.mozRequestFullScreen();
//        } else {
//            body.requestFullScreen();
//        }
//        isFullscreen = true;
//    }
//    else {
//        /// 解除
//        if (document.webkitCancelFullScreen) {
//            document.webkitCancelFullScreen();
//        } else if (document.mozCancelFullScreen) {
//            document.mozCancelFullScreen();
//        } else {
//            document.exitFullscreen();
//        }
//        isFullscreen = false;
//    }
//    location.reload();
//    
//  }
  
  
   $scope.clickExpand = function () {
      // Fullscreen
      if (Fullscreen.isEnabled())
         Fullscreen.cancel();
      else
         Fullscreen.all();
   };
   $scope.isFullScreen = false;
   $scope.goFullScreenViaWatcher = function() {
      $scope.isFullScreen = !$scope.isFullScreen;
   };
    
  
  
  $scope.clicImage = function() {
    console.log('clicImage');
  }
  
  $scope.clickLogin = function() {
    console.log('clickLogin');
  }
  
  $scope.clickClear = function() {
    console.log('clickClear');
    $window.location.reload(true);
  }
  
  $scope.$storage = $localStorage.$default({
    username: '',
    password: '',
    nickname: '名無しさん'
  });
  $scope.nickname = $scope.$storage.nickname;
  
});