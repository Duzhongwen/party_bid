/**
 * Created by duzhongwen on 14-8-26.
 */
angular.module('partyBidApp')
    .controller('Bid_ResultController', function ($scope,$location,$routeParams) {
       $scope.return=function(){
           $location.path('/Bidding_list/'+$routeParams.action);
       };
       $scope.Messages=Bid_result.get_bid_price($routeParams.action,$routeParams.bid_name);
       $scope.nums=$scope.Messages.length;
       $scope.statistics=function(){
           $location.path('/Price_statistics');
       }
    });