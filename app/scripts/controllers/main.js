'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
  .controller('MainCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.creat_order=function(action_name){
            var number;
            localStorage.setItem('action_name',action_name);
            var list_json= JSON.parse(localStorage['Action_name'] || '[]');
                for (var i = 0; i < list_json.length; i++) {
                    var s = list_json[i];
                    if (action_name == s) {
                         number=1;
                    }
                }
                if(number==1){
                    alert("活动名称重复，重新输入");
                }
                else{
                    $location.path('/Creat_Action');
                    list_json.unshift(action_name);
                    localStorage['Action_name'] = JSON.stringify(list_json);
                }

//            list_json.unshift(action_name);
//            localStorage['Action_name'] = JSON.stringify(list_json);
        }
        $scope.return1_order=function(){
            $location.path('/');
        }

  });
