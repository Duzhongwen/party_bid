'use strict';

/**
 * @ngdoc overview
 * @name partyBidApp
 * @description
 * # partyBidApp
*
 * Main module of the application.on
 */
angular
  .module('partyBidApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/Action_list.html',
        controller: 'Action_listCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/Registration',{
            templateUrl: 'views/Registration.html',
            controller: 'RegistrationCtrl'
        })
      .when('/Creat_action',{
            templateUrl: 'views/Creat_action.html',
            controller: 'MainCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
