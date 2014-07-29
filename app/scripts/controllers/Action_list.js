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
    .controller('Action_listCtrl', function ($scope,$location) {
        $scope.action_order=function(){
            $location.path('/Creat_action');
        }
        $scope.lists=JSON.parse(localStorage['Action_name'] || '[]');
        (function init(){
            if( $scope.lists==0){
                $location.path('/Creat_action');
            }
        })();
        $scope.Items=localStorage.getItem('Item');
        localStorage.setItem('Button_states',$scope.Items);
        $scope.enter_Registration=function(list){
           localStorage.setItem('action_name',list);
           $location.path('/Registration');
        }
    });