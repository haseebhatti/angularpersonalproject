describe('myController', function () {
  'use strict';
  var controller,
    scope,
    dropDownFactory,
    successPromise,
    $rootScope;
  var returnObj = {
    options: {
      item: 'Dodge Viper',
      description: 'Premium Laguna Leather Six-Way Power Seats with Alcantara Headliner',
      price: '$107,995'

    }
  };

  beforeEach(module('app.dropDownActions'));
  beforeEach(inject(function ($controller,
    _$rootScope_, _dropDownFactory_, $q) {
    // spyOn(_dropDownFactory_, 'getData').and.returnValue(successPromise)
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();

    var successPromise = $q.defer();
    successPromise.resolve(returnObj);

    dropDownFactory = _dropDownFactory_;
    spyOn(dropDownFactory, 'getData').and.returnValue(successPromise.promise);

    controller = $controller('DropDownActionsController as dc', {
      $scope: scope,
      dropDownFactory: _dropDownFactory_
    });
  }));

  describe('dropDownFactory', function () {
    it('should be defined ', function () {
      expect(dropDownFactory).toBeDefined();
    });
    it('should call getData', function () {
      expect(dropDownFactory.getData).toHaveBeenCalled();
    });
    it('should set', function () {
      $rootScope.$digest();

      expect(scope.dc.carInfo).toEqual(returnObj);
    });
  });
});
