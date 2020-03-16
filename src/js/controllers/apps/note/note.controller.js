/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-16 14:13:05
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-16 15:13:57
 */
import {
  note
} from "../../../constants/database";

export default angular.module('apps.note.controller', [])
  .controller('NoteCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.notes = note.notes;
    // set default note
    $scope.note = $scope.notes[0];
    $scope.notes[0].selected = true;

    $scope.colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark'];

    $scope.createNote = function () {
      var note = {
        content: '',
        color: $scope.colors[Math.floor((Math.random() * 3))],
        date: Date.now()
      };
      $scope.notes.push(note);
      $scope.selectNote(note);
    }

    $scope.deleteNote = function (note) {
      $scope.notes.splice($scope.notes.indexOf(note), 1);
      if (note.selected) {
        $scope.note = $scope.notes[0];
        $scope.notes.length && ($scope.notes[0].selected = true);
      }
    }

    $scope.selectNote = function (note) {
      angular.forEach($scope.notes, function (note) {
        note.selected = false;
      });
      $scope.note = note;
      $scope.note.selected = true;
    }

  }]);