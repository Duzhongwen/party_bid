/**
 * Created by duzhongwen on 14-7-31.
 */
angular.module('partyBidApp')
    .controller('Bidding_listController', function ($scope,$location,$routeParams){
        $scope.bidding_name= Bidding_list.get_bidding_information();
        $scope.start_bidding=function(){
        $scope.names=Bidding_list.Create_bidding($routeParams.action);//竞价名数组
        var name=$scope.names[0];
        Bidding.Storage_click_bidding(name);
        $location.path('/Bidding/'+$routeParams.action);
       }
        $scope.enter_bidding=function(name){
            $location.path('/Bidding/'+$routeParams.action);
            Bidding.Storage_click_bidding(name);
        }
        console.log($routeParams.action);
        $scope.initiate = function (){
            $scope.names = JSON.parse(localStorage[$routeParams.action+'biding_name']||'[]');
        }
        $scope.initiate();
        $scope.return_list=function(){
            $location.path('/');
        }
        $scope.registration=function(){
            $location.path('/Registration/'+$routeParams.action);
        }
    })