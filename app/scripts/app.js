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
      .when('/Creat_Action',{
            templateUrl: 'views/Creat_Action.html',
            controller: 'Creat_ActionCtrl'
        })
      .when('/main',{
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
