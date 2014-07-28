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
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        //var name=$scope.activity;
        var a=localStorage.getItem('a');
        $scope.activity = a;
        //console.log(a);
        $scope.show=function(){
            if($scope.activity==null){
                $scope.activity = "开始";
            }
        }
        $scope.show();
        console.log($scope.activity);
        $scope.return_order = function () {
            $location.path('/');
        }
        var storage_message=localStorage.getItem('action_name')+"messages";
        var activity_status;
        var item=localStorage.getItem('action_name');
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
        var New=localStorage.getItem('news');
        console.log(New);
        if(New!=null){
            $scope.News=false;
        }
        else{
            $scope.News=true;
        }
        console.log($scope.News);
        $scope.start_order=function() {
            if($scope.activity=="开始"){
                $scope.activity="结束";
                       $scope.refresh();
                localStorage.setItem('Item',item);
                // $scope.number=localStorage.getItem('number');
                //报名处于为开始状态点击的开始
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
                activity_status=false;//正在报名
            }
            else {
                activity_status=true;
            }
            localStorage.setItem("status",activity_status);
            localStorage.setItem('a',$scope.activity);
        }
        if($scope.activity == "结束") {
            activity_status=false;//正在报名
        }
        else {
            activity_status=true;
        }

        $scope.refresh();
//        $scope.mesages= $.grep($scope.Messages,function(i){
//                    return i<2;
//        });
//        console.log($scope.mesages);
//        localStorage.setItem("sta",pan);
        localStorage.setItem("status",activity_status);
    });
