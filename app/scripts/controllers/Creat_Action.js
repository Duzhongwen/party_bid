/**
 * Created by duzhongwen on 14-7-19.
 */
'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
    .controller('Creat_ActionCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.item=localStorage.getItem('action_name');
        $scope.return_order=function(){
            $location.path('/Action_list');
        }
//        $scope.item=localStorage.getItem('activity_name');
        //console.log('item');
        //localStorage['activitykey']=JSON.stringify(list_json);
    });
