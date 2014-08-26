/**
 * Created by duzhongwen on 14-8-26.
 */
angular.module('partyBidApp')
    .controller('Price_StatisticsController', function ($scope,$location,$routeParams) {
        $scope.enter_list=function(){
            $location.path('/Bid_result/'+$routeParams.action+'/'+$routeParams.bid_name);
        };
        $scope.return=function(){
            $location.path('/Bidding_list/'+$routeParams.action);
        }
    });