'use strict';

/**
 * @ngdoc overview
 * @name mqttMapApp
 * @description
 * # mqttMapApp
 *
 * Main module of the application.
 */
angular
  .module('mqttMapApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
