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
        $scope.lists=Create.get_Action_information();
        (function init(){//自动跳转创建活动页面
            if( $scope.lists==0){
                $location.path('/Create_action');
            }
        })();
        $scope.Items=Sign_up.Judge_Ongoing_action1();
        $scope.enter_Registration=function(activity){
           $location.path('/Registration/'+activity);
           Sign_up.State_switch1(activity,true);
        }
    });