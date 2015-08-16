'use strict';

angular.module('ccTrayApp')
  .controller('DashboardCtrl', ['$scope', 'x2js', 'HttpService', function ($scope, x2js, httpService) {
    var cc_tray_url = 'https://gist.githubusercontent.com/prasann/d677df383092bcbd0f2c/raw/98f9c8142fff8aab623c6a80e002ca4f19e2f878/cctray.xml';

    httpService.get(cc_tray_url).then(function (response) {
      var responseJson = x2js.xml_str2json(response.data);
      $scope.projects = responseJson.Projects.Project
    });
  }]);
