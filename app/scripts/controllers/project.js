'use strict';

/**
 * @ngdoc function
 * @name oneSkyTestApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the oneSkyTestApp
 */
angular.module('oneSkyTestApp')
  .controller('ProjectCtrl', ['$scope', 'moment', function ($scope, moment) {
    // creating some fake times
    var vm = this;
    vm.timeNow = moment();
    vm.timeNow2 = moment().subtract(1, 'hours');
    vm.timeNow3 = moment().subtract(1, 'days');
    vm.timeNow4 = moment().subtract(2, 'days');
    vm.timeNow5 = moment().subtract(4, 'days');

    $scope.example = 'sausages';
    $scope.projects = [
      {'id': 1, 'name':'Project One', 'read': true},
      {'id': 2, 'name':'Project Two', 'read': false},
      {'id': 3, 'name':'Project Three', 'read': true}];
    $scope.conversations = [
      {'id': 1,
        'language':'Chinese', 
        'image': 'https://goo.gl/KhNkFs',
        'content': 'Should you have any problem with the translation, feel free to contact the project manager!',
        'date': (vm.timeNow2.format('H:mma')) + ' (' + (vm.timeNow2.fromNow()) + ')',
        'sender': 'A Chan',
        'read': true
      },
      {'id': 2, 'language':'French',
        'image': 'https://goo.gl/KhNkFs',
        'content': 'Should you have any problem with the translation, feel free to contact the project manager!',
        'date': (vm.timeNow3.format('MMM YY')) + ' (' + (vm.timeNow3.fromNow()) + ')',
        'sender': 'A Chan',
        'read': false
      },
      {'id': 3, 'language':'Korean',
        'image': 'https://goo.gl/KhNkFs',
        'content': 'Should you have any problem with the translation, feel free to contact the project manager!',
        'date': (vm.timeNow4.format('MMM YY')) + ' (' + (vm.timeNow4.fromNow()) + ')',
        'sender': 'A Chan',
        'read': true}];
    $scope.chatRecords = [
      {
        'content':'Should you have any problem with the translation, feel free to contact the project manager!', 
        'image': 'https://goo.gl/xwPb0E',
        'sender': 'A Chan', 'me': true,
        'date': (vm.timeNow4.format('MMM YY')) + ' (' + (vm.timeNow4.fromNow()) + ')',
      },
      {
        'content':'Should you have any problem with the translation, feel free to contact the project manager!',
        'image': 'https://goo.gl/KhNkFs',
        'sender': 'A Chan',
        'me': false,
        'date': (vm.timeNow3.format('MMM YY')) + ' (' + (vm.timeNow3.fromNow()) + ')',
      },
      {
        'content':'Should you have any problem with the translation, feel free to contact the project manager!',
        'image': 'https://goo.gl/xwPb0E',
        'sender': 'A Chan',
        'me': true,
        'date': (vm.timeNow2.format('H:mma')) + ' (' + (vm.timeNow2.fromNow()) + ')',
      },
      {'content':'Should you have any problem with the translation, feel free to contact the project manager!',
        'image': 'https://goo.gl/KhNkFs',
        'sender': 'A Chan',
        'me': false,
        'date': (vm.timeNow2.format('H:mma')) + ' (' + (vm.timeNow2.fromNow()) + ')',
      }];
  
      $scope.setProject = function(name) {
        $scope.currentProject = name;
        $scope.showConvos = true;
      };

      $scope.projectRead = function(){
        $scope.read = true;
      };

      $scope.setLanguage = function(language) {
        $scope.currentLanguage = language;
        $scope.showChats = true;
      };
  }]);
