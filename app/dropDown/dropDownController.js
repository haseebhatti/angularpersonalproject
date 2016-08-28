(function () {
  'use strict';

  function DropDownActionsController (dropDownFactory) {
    this.dropDownActions = dropDownFactory.getData();
  }
  angular.module('app.dropDownActions')
    .controller('DropDownActionsController', DropDownActionsController);
}());
