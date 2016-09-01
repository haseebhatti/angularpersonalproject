(function () {
  'use strict';

  function DropDownActionsController (dropDownFactory) {
    var vm = this;
    this.title = 'Car Comparison';
    dropDownFactory.getData().then(function (carInfo) {
      vm.carInfo = carInfo;
    });
  }

  angular.module('app.dropDownActions')
    .controller('DropDownActionsController', DropDownActionsController);
}());
