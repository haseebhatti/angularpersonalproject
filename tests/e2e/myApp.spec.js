describe('split-button', function () {
  it('should have actions displayed using ng-repeat', function () {
    browser.get('index.html');
    var header = element(by.id('dropDown-button'));
    header.click();
    // expect(element(by.class('dropdown-menu'))).isDisplayed()
    expect(1).toEqual(2);
  });
});
