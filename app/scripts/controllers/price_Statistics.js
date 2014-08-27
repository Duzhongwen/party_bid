/**
 * Created by duzhongwen on 14-8-26.
 */
angular.module('partyBidApp')
    .controller('Price_StatisticsController', function ($scope,$location,$routeParams) {
        $scope.enter_list=function(){
            $location.path('/Bid_result/'+$routeParams.action+'/'+$routeParams.bid_name);
        };
        var messages=Price_statistics.count_price($routeParams.action,$routeParams.bid_name);
        $scope.Messages= Price_statistics.bid_statistics(messages);
        console.log($scope.Messages);
        $scope.return=function(){
            $location.path('/Bidding_list/'+$routeParams.action);
        }
    });