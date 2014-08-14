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
        Bidding.get_Inquiry_bidding();
        $scope.return=function(){
            $location.path('/Bidding_list/'+$routeParams.ongoing_action);
        }
        Bidding.get_click_bidding();
        $scope.refresh = function () {
            $scope.Messages =Bidding.Conversion_bidding_information();
            $scope.nums = $scope.Messages.length;
            $scope.JJName=Bidding_list.get_JJ_information();
        }
        $scope.refresh();
        $scope.end=function(){
            if (confirm("确认要结束本次报名？")) {//点击是,结束竞价
                Bidding.Initialization_bidding();
            }
        }
        $scope.bidding_name=Bidding_list.get_bidding_information();
    })