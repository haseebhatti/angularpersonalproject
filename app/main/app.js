(function () {
  'use strict';
  function MyController () {
    this.name = 'This is my controller';
  }
  angular.module('myApp', [])
    .controller('MyController', MyController);
}());
