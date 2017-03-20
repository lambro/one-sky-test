'use strict';

/**
 * @ngdoc function
 * @name oneSkyTestApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the oneSkyTestApp
 */
angular.module('oneSkyTestApp')
  .controller('ProjectCtrl', ['$scope', function ($scope) {
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
        'date': '12-01-2016','sender': 'A Chan',
        'read': true
      },
      {'id': 2, 'language':'French',
        'image': 'https://goo.gl/KhNkFs',
        'content': 'Should you have any problem with the translation, feel free to contact the project manager!',
        'date': '12-01-2016', 'sender': 'A Chan',
        'read': false
      },
      {'id': 3, 'language':'Korean',
        'image': 'https://goo.gl/KhNkFs',
        'content': 'Should you have any problem with the translation, feel free to contact the project manager!',
        'date': '12-01-2016', 'sender': 'A Chan',
        'read': true}];
    $scope.chatRecords = [
      {'content':'Should you have any problem with the translation, feel free to contact the project manager!', 'image': 'https://goo.gl/xwPb0E', 'sender': 'A Chan', 'me': true},
      {'content':'Should you have any problem with the translation, feel free to contact the project manager!', 'image': 'https://goo.gl/KhNkFs', 'sender': 'A Chan', 'me': false},
      {'content':'Should you have any problem with the translation, feel free to contact the project manager!', 'image': 'https://goo.gl/xwPb0E', 'sender': 'A Chan', 'me': true},
      {'content':'Should you have any problem with the translation, feel free to contact the project manager!', 'image': 'https://goo.gl/KhNkFs', 'sender': 'A Chan', 'me': false}];
  
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
