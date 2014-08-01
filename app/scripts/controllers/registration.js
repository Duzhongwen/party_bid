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
    .controller('RegistrationController', function ($scope,$location) {
        var activity_status;
        var items = List.Ongoing_activities_read();
        var action_name = Sign_up.get_click_activity();
        $scope.activity = Sign_up.get_button();
        ($scope.show = function () {
            if ($scope.activity == null) {
                $scope.activity = "开始";
            }
        })();
        $scope.return_order = function () {
            $location.path('/');
        }
        $scope.bidding=function(){
            $location.path('/Bidding_list');
        }
        function Button_judgment(){
            return ($scope.activity == "开始")
        }
        Sign_up.get_activity_information();
        $scope.refresh = function () {
            $scope.Messages = Sign_up.Conversion_registration_information();
            $scope.nums = $scope.Messages.length;
        }
        $scope.start_order = function () {
            if (Button_judgment()) { //报名处于为开始状态点击的开始
                $scope.activity = "结束";
                $scope.refresh();
                Sign_up.Assignment_ongoing_activity();//活动开始给正在进行的活动Item赋值当前的点击活动
            } else { //报名正在进行中时点击的结束
                if (confirm("确认要结束本次报名？")) {
                    $location.path('/Bidding_list');
                    $scope.activity = "开始";//点击是,结束报名
                    Sign_up.Assignment_ongoing_activity();//活动结束把正在进行的活动Item赋值null
                }
                else {
                    $scope.refresh();
                    $scope.activity = "结束 ";//点击否,继续报名
                    Sign_up.Assignment_ongoing_activity();
                }
            }
            Button_judgment();
            localStorage.setItem("status",  Button_judgment());
            localStorage.setItem('button', $scope.activity);
        }
            Button_judgment();
            localStorage.setItem("status",  Button_judgment());
            if (items != action_name) {
                $scope.activity = "开始";//不是当前活动
                var Button_States = localStorage.getItem('Button_states');
                (function Ongoing_activities_states(){
                    $scope.button_states=(Button_States != 'null');
                    activity_status =undefined;
                    localStorage.setItem("status",activity_status);
                })()
            }
            $scope.refresh();
        });
