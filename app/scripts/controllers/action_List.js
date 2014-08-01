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
    .controller('Action_listController', function ($scope,$location) {
        $scope.action_order=function(){
            $location.path('/Create_action');
        }
        $scope.lists=Create.get_Action_name();
        (function init(){//自动跳转创建活动页面
            if( $scope.lists==0){
                $location.path('/Create_action');
            }
        })();
        $scope.Items=List.Ongoing_activities_read();
        List.Storage_Ongoing_activities();
        $scope.enter_Registration=function(list){
            List.Storage_click_activity(list);
           $location.path('/Registration');
        }
    });