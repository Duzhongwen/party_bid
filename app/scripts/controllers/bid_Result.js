/**
 * Created by duzhongwen on 14-8-26.
 */
angular.module('partyBidApp')
    .controller('Bid_ResultController', function ($scope,$location,$routeParams) {
        $('#success').modal('show');
        setTimeout(function(){
                $('#success').modal('hide')}
            ,3000);
        $scope.return=function(){
           $location.path('/Bidding_list/'+$routeParams.action);
       };
       $scope.Messages=Bid_result.get_bid_price($routeParams.action,$routeParams.bid_name);
       $scope.nums=$scope.Messages.length;
       $scope.success=Bid_result.select_success_bid($scope.Messages);
       $scope.statistics=function(){
           $location.path('/Price_statistics/'+$routeParams.action+'/'+$routeParams.bid_name);
       }
    });