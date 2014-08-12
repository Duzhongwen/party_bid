/**
 * Created by duzhongwen on 14-7-31.
 */
angular.module('partyBidApp')
    .controller('Bidding_listController', function ($scope,$location){
        $scope.bidding_name= Bidding_list.get_bidding_information();
        $scope.start_bidding=function(){
        $scope.names=Bidding_list.Create_bidding();
        var name=$scope.names[0];
        Bidding.Storage_click_bidding(name);
        $location.path('/Bidding');
       }
        $scope.enter_bidding=function(name){
            $location.path('/Bidding');
            Bidding.Storage_click_bidding(name);
        }
        $scope.initiate = function (){
            $scope.names = JSON.parse(localStorage[Sign_up.get_click_activity()+'biding_name']||'[]');
        }
        $scope.initiate();
        $scope.return_list=function(){
            $location.path('/');
        }
        $scope.registration=function(){
            $location.path('/Registration');
        }
    })