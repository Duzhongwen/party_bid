/**
 * Created by duzhongwen on 14-7-31.
 */
angular.module('partyBidApp')
    .controller('Bidding_listController', function ($scope,$location){
        $scope.start_bidding=function(){
            
            $location.path('/Bidding');
       }
        $scope.return_list=function(){
            $location.path('/');
        }
        $scope.registration=function(){
            $location.path('/Registration');
        }
        var Ongoing_action=List.Ongoing_activities_read();
        console.log(Ongoing_action);
    })