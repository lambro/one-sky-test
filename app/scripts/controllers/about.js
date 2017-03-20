'use strict';

/**
 * @ngdoc function
 * @name oneSkyTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the oneSkyTestApp
 */
angular.module('oneSkyTestApp')
  .controller('AboutCtrl', ['$scope', 'moment', '$timeout', function ($scope, moment, $timeout){

    // creating some fake data
    var vm = this;
    vm.timeNow = moment();
    vm.timeNow2 = moment().subtract(1, 'hours');
    vm.timeNow3 = moment().subtract(1, 'days');
    vm.timeNow4 = moment().subtract(2, 'days');
    vm.timeNow5 = moment().subtract(4, 'days');

    $scope.notifications = [
      {
        'team':'Translation Team', 
        'image': 'https://goo.gl/KhNkFs',
        'content': 'has joined the',
        'date': (vm.timeNow2.format('H:mma')) + ' (' + (vm.timeNow2.fromNow()) + ')',
        'sender': 'Vincent Chan',
        'read': false,
        'request': false
      },
      {
        'team':'Translation Team', 
        'image': 'https://goo.gl/KhNkFs',
        'content': 'has requested to join the',
        'date': (vm.timeNow3.format('MMM YY')) + ' (' + (vm.timeNow3.fromNow()) + ')',
        'sender': 'Victor Lam',
        'read': false,
        'request': true,
        'accepted': false,
        'declined': false
      },
      {
        'team':'South East Asia Translation Team', 
        'image': 'https://goo.gl/KhNkFs',
        'content': 'has joined the',
        'date': (vm.timeNow4.format('MMM YY')) + ' (' + (vm.timeNow4.fromNow()) + ')',
        'sender': 'Victor Lam',
        'read': true,
        'request': false
      },
      {
        'team':'Admin Team', 
        'image': 'https://goo.gl/KhNkFs',
        'content': 'has joined the',
        'date': (vm.timeNow5.format('MMM YY')) + ' (' + (vm.timeNow5.fromNow()) + ')',
        'sender': 'Victor Lam',
        'read': true, 
        'request': false
      }];

      $scope.clearNotifications = function(){
        for (var i = $scope.notifications.length - 1; i >= 0; i--) {
         $scope.notifications[i].read = true;
        }
      };

      $scope.clearNotiication = function(current){
        current.read = true;
      };

      $scope.acceptRequest = function(current){
        current.accepted = true;
        current.request = false;
        current.displayMessage = 'accepted' ;
        $timeout(function() {
          current.timeout = true;
        }, 2000);
      };

      $scope.declineRequest = function(current){
        current.declined = true;
        current.request = false;
        current.displayMessage = 'declined' ;
        $timeout(function() {
          current.timeout = true;
        }, 2000);
      };
  
  }]);
