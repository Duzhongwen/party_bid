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
        $scope.activity = "开始";
        $scope.item = localStorage.getItem('action_name');
        $scope.return_order = function () {
            $location.path('/');
        }

        var activity_status;
        $scope.refresh = function () {
            $scope.Messages = JSON.parse(localStorage['messages'] || '[]');
            //var name=localStorage.getItem('name');
            //var number=localStorage.getItem('number');
            //$scope.name1 = namevar
            //$scope.number1 = number;
    }
        $scope.start_order=function() {
            if($scope.activity=="开始"){
                $scope.activity="结束";
                       $scope.refresh();
               // $scope.number=localStorage.getItem('number');
                //报名进行中，点击的开始
            }else{ //报名已结束,点击的结束
                //$scope.activity=="开始";
                if(confirm("确认要结束本次报名？")){
                    $scope.activity="开始";//点击是,结束报名
                }else{
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
        if ($scope.activity == "结束") {
            activity_status=false;//正在报名
        }
        else {
            activity_status=true;
        }
        localStorage.setItem("status",activity_status);
       //var item=localStorage.getItem('action_name');
       // localStorage.setItem('Item',item);
//        $scope.items=item;
//         console.log(items);
        //localStorage['activitykey']=JSON.stringify(list_json);
    });
