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
    .controller('RegistrationCtrl', function ($scope,$location) {
        var a=localStorage.getItem('a');
        $scope.activity = a;
        $scope.show=function(){
            if($scope.activity==null){
                $scope.activity = "开始";
            }
        }
        $scope.show();
        $scope.return_order = function () {
            $location.path('/');
        }
        var storage_message=localStorage.getItem('action_name')+"messages";
        var activity_status;
        var item=localStorage.getItem('action_name');
        $scope.refresh = function (){
            $scope.Messages= JSON.parse(localStorage[storage_message] || '[]');
            $scope.nums=$scope.Messages.length;
        }
        $scope.start_order=function() {
            if($scope.activity=="开始"){ //报名处于为开始状态点击的开始
                $scope.activity="结束";
                $scope.refresh();
                localStorage.setItem('Item',item);
            }else{ //报名正在进行中时点击的结束
                //$scope.activity=="开始";
                if(confirm("确认要结束本次报名？")){
                    $scope.activity="开始";//点击是,结束报名
                localStorage.setItem('Item',null);
                }
                else{
                    $scope.activity="结束 ";//点击否,继续报名
                        $scope.refresh();
                    localStorage.setItem('Item',item);
                }
            }
            if ($scope.activity == "结束") {
                activity_status=false;//正在报名状态
            }
            else {
                activity_status=true;//报名没有在进行状态
            }
            localStorage.setItem("status",activity_status);
            localStorage.setItem('a',$scope.activity);
        }
        var items=localStorage.getItem('Item');
        var action_name=localStorage.getItem('action_name');
        if($scope.activity == "结束") {
            activity_status=false;//正在报名
        }
        else {
            activity_status=true;
        }
        if(items==action_name)
        {
            $scope.activity="结束 ";
        }
        else
        {
            $scope.activity="开始";
            var Button_States=localStorage.getItem('Button_states');
            if(Button_States=='null'){
                $scope.Button_states=false;
            }else{
                $scope.Button_states=true;
            }
        }
        $scope.refresh();
        localStorage.setItem("status",activity_status);
    });
