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
        $scope.activity="开始";
        $scope.item=localStorage.getItem('action_name');
        $scope.return_order=function(){
            $location.path('/');
        }
//        $scope.show=function(){
//            if($scope.activity="结束") {
//
//
//            }
//            else{
//                if(name==null){
//                    console.log("对不起，报名尚未开始");
//                }else {
//                    console.log("对不起，报名结束");
//                }
//        }
        $scope.refresh=function(){
            $scope.Messages=JSON.parse(localStorage['messages'] || '[]');
            //var name=localStorage.getItem('name');
            //var number=localStorage.getItem('number');
            //$scope.name1 = name;
            //$scope.number1 = number;

            console.log("恭喜你，报名成功");
            };

        $scope.refresh();
        $scope.start_order=function() {
            if($scope.activity=="开始"){
                $scope.activity="结束";
            //    $scope.refesh();

               // $scope.number=localStorage.getItem('number');
                //报名进行中，点击的开始
            }else{
                if(confirm("确认要结束本次报名？")){
                    $scope.activity="开始";//点击是
                }else{
                    $scope.activity="结束 ";//点击否
                  //  $scope.refesh();
                }
                //报名已结束,点击的结束
            }

        }

//        $scope.item=localStorage.getItem('activity_name');
        //console.log('item');
        //localStorage['activitykey']=JSON.stringify(list_json);
    });
