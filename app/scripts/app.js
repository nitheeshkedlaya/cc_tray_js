'use strict';

/**
 * @ngdoc overview
 * @name ccTrayApp
 * @description
 * # ccTrayApp
 *
 * Main module of the application.
 */
angular
  .module('ccTrayApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'cb.x2js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


