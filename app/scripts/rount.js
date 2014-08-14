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
        templateUrl: 'views/action_List.html',
        controller: 'Action_listController'
      })
      .when('/Registration/:activity',{
            templateUrl: 'views/registration.html',
            controller: 'RegistrationController'
      })
      .when('/Create_action',{
            templateUrl: 'views/create_Action.html',
            controller: 'Create_actionController'
      })
      .when('/Bidding_list/:action',{
            templateUrl: 'views/bidding_List.html',
            controller: 'Bidding_listController'
      })
      .when('/Bidding/:ongoing_action',{
            templateUrl: 'views/bidding.html',
            controller: 'BiddingController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
