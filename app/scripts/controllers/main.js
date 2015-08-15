'use strict';

/**
 * @ngdoc function
 * @name ccTrayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ccTrayApp
 */
angular.module('ccTrayApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.ipData = "Some data";
    var promise = $http({
      method: 'GET',
      url: 'http://ip.jsontest.com/',
      headers: {'Content-Type': 'text/plain'} //or whatever type
    });
    promise.then(function (response) {
      $scope.ipData = response.data['ip'];
    });
    console.log($scope.ipData);


  }]);
