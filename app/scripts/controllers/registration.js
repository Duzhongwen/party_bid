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
    .controller('RegistrationController', function ($scope,$location,$routeParams) {
        $scope.return_order = function () {
            $location.path('/');
        }
        $scope.button_states=Sign_up.Judge_available($routeParams.activity);
        $scope.buttons=Sign_up.Judge_action($routeParams.activity);
        $scope.bidding=function(){
            $location.path('/Bidding_list');
        }
        function Button_judgment(){
            return $scope.buttons;
        }
   //     Sign_up.get_activity_information();
        $scope.refresh = function (){
            $scope.Messages = Sign_up.Conversion_registration_information($routeParams.activity);
            $scope.nums = $scope.Messages.length;
        }
        $scope.start_order=function(){
            $scope.buttons=false;
            Sign_up.State_switch($routeParams.activity,false);
        }
        $scope.end_order=function(){
            if(confirm("是否要结束报名")){
                Sign_up.State_switch($routeParams.activity,true);
                
            }
        }
        $scope.refresh();
    });
