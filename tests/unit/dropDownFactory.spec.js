describe('dropDownFactory', function () {
  var dropDownFactory;
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

  beforeEach(module('app.dropDownActions'));
  beforeEach(inject(function (_dropDownFactory_) {
    dropDownFactory = _dropDownFactory_;
  }));
  it('should be defined', function () {
    expect(dropDownFactory.getData).toBeDefined();
  });
  it('should return menuOption', function () {
    expect(dropDownFactory.getData()).toEqual(options);
  });
});
