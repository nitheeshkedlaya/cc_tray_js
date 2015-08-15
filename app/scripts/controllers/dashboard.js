'use strict';

angular.module('ccTrayApp')
  .controller('DashboardCtrl', ['$scope', 'x2js', '$http', function ($scope, x2js, $http) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var promise = $http({
      method: 'GET',
      url: 'https://gist.githubusercontent.com/prasann/d677df383092bcbd0f2c/raw/98f9c8142fff8aab623c6a80e002ca4f19e2f878/cctray.xml',
      headers: {'Content-Type': 'text/json'} //or whatever type
    });
    promise.then(function (response) {
      $scope.ip = x2js.xml_str2json(response.data);
    });
  }]);
