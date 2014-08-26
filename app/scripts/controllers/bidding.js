/**
 * Created by duzhongwen on 14-8-1.
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
    .controller('BiddingController', function ($scope,$location,$routeParams) {
        $scope.return=function(){
            $location.path('/Bidding_list/'+$routeParams.ongoing_action);
        };
        $scope.refresh = function () {
            $scope.Messages=Bidding.get_click_information($routeParams.ongoing_action,$routeParams.bid_name);
            $scope.nums=$scope.Messages.length;
        };//需要返回竞价着的号码和对应的报名信息中的名字
        $scope.refresh();
        $scope.end=function(){
            if (confirm("确认要结束本次报名？")) {//点击是,结束竞价
                Bidding_list.change_bidding_status($routeParams.ongoing_action);
                $location.path('/Bid_result/'+$routeParams.ongoing_action+'/'+$routeParams.bid_name);
            }
        };

    });