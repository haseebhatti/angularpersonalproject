(function () {
  'use strict';
  angular.module('app.dropDownActions')
    .factory('dropDownFactory', dropDownFactory);
  var options = [{
    menuOption: 'Home'
  },
    {
      menuOption: 'Trending'
    },
    {
      menuOption: 'Music'
    },
    {
      menuOption: 'Sports'
    },
    {
      menuOption: 'Gaming'
    },
    {
    menuOption: 'Movies'}];
  function dropDownFactory ($http) {
    function getData () {
      return options;
    }

    return {
      getData: getData
    };
  }
}());
