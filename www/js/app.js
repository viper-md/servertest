// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.controller('AppCtrl', function($scope, $http) {
    $scope.data = {};
    var postData = {
        function = "GetTerminalNumber",
        filename = "commonapp",
        AccessType=0,
        TerminalType=001,
        TerminalInfo="android",

      kycinfo : $scope.data.kycinfo ,
       phone : $scope.data.phoneno, 
       emailaddress : $scope.data.email ,
  };

    $scope.submit = function(){
        var link = 'http://qa310-res-m.panamaxil.com/commonrest/commonrest/';

        $http.post(link, postData).then(function (res){
            $scope.response = res.data;
        });
    };
});
