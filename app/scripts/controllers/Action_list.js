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
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.action_order=function(){
            $location.path('/main');
        }
        //$scope.Action_lname=
          //  localStorage.getItem("Action_name");
        $scope.lists=JSON.parse(localStorage['Action_name'] || '[]');
        var list1=JSON.parse(localStorage['Action_name'] || '[]');
        if(list1==0){
            $location.path('/main');
        }
       // var Sta=localStorage.getItem("sta");
       // console.log(Sta);
        $scope.Items=localStorage.getItem('Item');
        console.log($scope.Items);
        localStorage.setItem('news',$scope.Items);
        $scope.enter_Registration=function(list){
           localStorage.setItem('action_name',list);
           $location.path('/Registration');
        }
    });