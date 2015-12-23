'use strict';

angular.module('ccTrayApp')
  .controller('DashboardCtrl', ['$scope', 'x2js', 'HttpService', function ($scope, x2js, httpService) {
    var cc_tray_url = 'http://localhost:8111/guestAuth/app/rest/cctray/projects.xml';

    httpService.get(cc_tray_url).then(function (response) {
      $scope.projects= response.data.Project;
    });
  }]);
