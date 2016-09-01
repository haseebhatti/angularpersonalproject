describe('TestDirective', function () {
  var $compile,
    $rootScope,
    $httpBackend;
  beforeEach(module('app.customDirective'));
  beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;

    $httpBackend.when('GET', 'directive/customDirec.html.tpl').respond('This is my title');
  }));
  xit('should replace element with contents', function () {
    var element = $compile('<my-directive>Stuff Inside</my-directive>')($rootScope);
    $rootScope.$digest();
    $httpBackend.flush();
    expect(element.html()).toContain('My Custom Directive');
  });
});
