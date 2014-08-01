/**
 * Created by duzhongwen on 14-7-31.
 */
angular.module('partyBidApp')
    .controller('Bidding_listController', function ($scope,$location){
        $scope.start_bidding=function(){
            $scope.names=Bidding_list.Create_bidding();
            console.log($scope.names);
            $location.path('/Bidding');
       }
        $scope.initiate = function (){
            $scope.names = JSON.parse(localStorage[Sign_up.get_click_activity()+'bidding_name']||'[]');
        }
        $scope.initiate();
        $scope.return_list=function(){
            $location.path('/');
        }
        $scope.registration=function(){
            $location.path('/Registration');
        }
//        var Ongoing_action=List.Ongoing_activities_read();
//        console.log(Ongoing_action);
    })