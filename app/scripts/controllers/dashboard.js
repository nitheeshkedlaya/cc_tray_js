'use strict';

angular.module('ccTrayApp')
  .controller('DashboardCtrl', ['$scope', '$http', function ($scope, $http) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var promise = $http({
      method: 'GET',
      url: 'http://ip.jsontest.com/',
      headers: {'Content-Type': 'text/json'} //or whatever type
    });
    promise.then(function (response) {
      $scope.ip = response.data.ip;
    });
  }]);
