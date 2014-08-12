'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
  .controller('Create_actionController', function ($scope,$location) {
        $scope.list=Create.get_Action_information();
        $scope.creat_order=function(action_name){
            if(Create.inquire_action(action_name)){
                $scope.warn="活动名称重复，重新输入";
            }
            else{
                var create=new  Create(action_name,true,false);
                $location.path('/Registration/'+action_name);
                create.get_change_Action_name();
                }
        }
        $scope.return1_order=function(){
            $location.path('/');
        }

  });
