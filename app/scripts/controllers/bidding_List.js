/**
 * Created by duzhongwen on 14-7-31.
 */
angular.module('partyBidApp')
    .controller('Bidding_listController', function ($scope,$location,$routeParams){
        $scope.start_bidding=function(){
        Bidding_list.Create_bidding($routeParams.action);//竞价名数组
        $scope.names= Bidding_list.get_bid_name($routeParams.action);
        $location.path('/Bidding/'+$routeParams.action+'/'+$scope.names[0].bid_name);
        };
        $scope.names= Bidding_list.get_bid_name($routeParams.action);
        $scope.bid_status=Bidding_list.jugement_bid_status($routeParams.action);
        $scope.enter_bidding=function(bid_name){
            $location.path('/Bidding/'+$routeParams.action+'/'+bid_name.bid_name);
        };
        $scope.return_list=function(){
            $location.path('/');
        };
        $scope.registration=function(){
            $location.path('/Registration/'+$routeParams.action);
        }
    });