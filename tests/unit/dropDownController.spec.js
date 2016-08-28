xdescribe('myController', function () {
  var controller, scope, dropDownFactory;

  beforeEach(module('app'));
  beforeEach(inject(function ($controller, $rootScope, _dropDownFactory_) {
    scope = $rootScope.$new();
    dropDownFactory = _dropDownFactory_;
    spyOn(dropDownFactory, 'getData');
    controller = $controller('DropDownActionsController as dc', {
      $scope: scope,
      dropDownFactory: dropDownFactory
    });
  }));
  describe('dropDownFactory', function () {
    it('should be defined ', function () {
      expect(dropDownFactory).toBeDefined();
    });
    it('should call getData', function () {
      expect(dropDownFactory.getData).toHaveBeenCalled();
    });
  });
});
