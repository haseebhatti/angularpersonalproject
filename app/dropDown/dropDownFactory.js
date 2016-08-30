(function () {
  'use strict';
  angular.module('app.dropDownActions')
    .factory('dropDownFactory', dropDownFactory);

  function dropDownFactory ($http) {
    function getData () {
      return $http.get('/videos').then(function (response) {
        return response.data;
      });
    }

    return {
      getData: getData
    };
  }
  var mockResponse = {
    options: [{
      menuOption: 'Home'
    }, {
      menuOption: 'Trending'
    }, {
      menuOption: 'Music'
    }, {
      menuOption: 'Sports'
    }, {
      menuOption: 'Gaming'
    }, {
      menuOption: 'Movies'
    }]
  };
}());
