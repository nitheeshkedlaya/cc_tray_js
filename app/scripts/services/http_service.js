'use strict';

angular.module('ccTrayApp').service('HttpService', ['$http', function ($http) {
  this.get = function (url) {
    return $http({
      method: 'GET',
      url: url,
      headers: {'Content-Type': 'text/json'}
    });
  };
}]);
