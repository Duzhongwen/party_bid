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

        //var name=$scope.activity;
        $scope.activity = "开始";
        $scope.return_order = function () {
            $location.path('/');
        }
        var storage_message=localStorage.getItem('action_name')+"messages";
        var activity_status;
        var item=localStorage.getItem('action_name');
        console.log(item);
        var pan;
        //$scope.number=0;
        $scope.refresh = function (){
            $scope.Messages= JSON.parse(localStorage[storage_message] || '[]');
            var num=JSON.parse(localStorage[storage_message] || '[]');
            $scope.nums=num.length/2;
            //var name=localStorage.getItem('name');
            //var number=localStorage.getItem('number');
            //$scope.name1 = namevar
            //$scope.number1 = number;
            //$scope.activity=name;
//            if($scope.activity=="开始"){
//                pan=false;//活动关闭状态，返回false
//            }else{
//                pan=true;//活动开启状态，返回true
//            }
    }
        $scope.start_order=function() {
            if($scope.activity=="开始"){
                $scope.activity="结束";
                       $scope.refresh();
                // $scope.number=localStorage.getItem('number');
                //报名处于为开始状态点击的开始
            }else{ //报名正在进行中时点击的结束
                //$scope.activity=="开始";
                if(confirm("确认要结束本次报名？")){
                    $scope.activity="开始";//点击是,结束报名
                }
                else{
                    $scope.activity="结束 ";//点击否,继续报名
                        $scope.refresh();
                }
            }
            if ($scope.activity == "结束") {
                activity_status=false;//正在报名
            }
            else {
                activity_status=true;
            }
            localStorage.setItem("status",activity_status);
        }
        if($scope.activity == "结束") {
            activity_status=false;//正在报名
        }
        else {
            activity_status=true;
        }
       // localStorage.setItem('name',$scope.activity);
        $scope.refresh();
//        $scope.mesages= $.grep($scope.Messages,function(i){
//                    return i<2;
//        });
//        console.log($scope.mesages);
       // localStorage.setItem("sta",pan);
        localStorage.setItem("status",activity_status);
    });
