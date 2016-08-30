describe('dropDownFactory', function () {
  var $httpBackend,
    dropDownFactory,
    $rootScope;

  var options = {
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
  beforeEach(module('app.dropDownActions'));
  beforeEach(inject(function (_dropDownFactory_, _$httpBackend_, _$rootScope_) {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    dropDownFactory = _dropDownFactory_;
    $httpBackend.when('GET', '/videos').respond(options);
  }));
  it('should be defined', function () {
    expect(dropDownFactory.getData).toBeDefined();
  });
  it('should return menuOption', function () {
    var promise = dropDownFactory.getData();
    $httpBackend.flush();

    expect(promise.$$state.value).toEqual(options);
  });
  it('should return data when promise is resolved', function () {
    var promise = dropDownFactory.getData();
    var returnData;
    $httpBackend.flush();

    function cb (data) {
      returnData = data;
    }
    promise.then(cb);
    $rootScope.$digest();

    expect(returnData).toEqual(options);
  });
  it('should call http when to get videos', function () {
    $httpBackend.expectGET('/videos');
    dropDownFactory.getData();
    $httpBackend.flush();
  });
});
