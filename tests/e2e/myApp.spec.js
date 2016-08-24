describe('heading', function () {
  it('should have a value', function () {
    browser.get('index.html');
    var header = element(by.id('heading'));
    var binder = element(by.binding('mc.name'));

    expect(header.getText()).toEqual('This is my controller');
    expect(binder.getText()).toEqual('This is my controller');
  });
});
