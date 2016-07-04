angular.module('starter')

.controller('LoginCtrl', function($scope) {
  $scope.imgsrc="http://xmpp.hplabs.jp/demo/push/lib/avator/makoto.jpg";
  
  $scope.clickExpand = function() {
    console.log('clickExpand');
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
  }
  
  $scope.clicImage = function() {
    console.log('clicImage');
  }
  
  $scope.clickLogin = function() {
    console.log('clickLogin');
  }
  
  
  var isFullscreen = false;

});