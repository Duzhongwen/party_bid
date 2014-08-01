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
    .controller('BiddingController', function ($scope,$location) {
        $scope.return=function(){
            $location.path('/Bidding_list');
        }
        $scope.end=function(){
            if (confirm("确认要结束本次报名？")) {//点击是,结束竞价
                Bidding.Initialization_activity();
            }
            else {//点击否，继续竞价

            }
        }
    })