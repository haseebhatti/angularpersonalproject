describe('dropDownFactory', function () {
  'use strict';
  var $httpBackend,
    dropDownFactory,
    $rootScope;

  var options = {
    options: [{
      item: 'Dodge Viper',
      description: 'Premium Laguna Leather Six-Way Power Seats with Alcantara Headliner',
      price: '$107,995',
      image: './image/dodge_viper.jpg'
    }, {
      item: 'Nissan GTR Nismo',
      description: 'doesn’t matter what you call it—GT-R or, more fittingly, Godzilla—Nissan’s range topper is a supercar-stomping, high-tech dynamo. Its 3.8-liter twin-turbo V-6 makes a mighty 565 hp while a six-speed dual-clutch automatic and all-wheel drive team up to put all that power to the pavement',
      price: '$149,990',
      image: './image/gtr_nismo.jpg'
    }, {
      item: 'Ford GT',
      description: 'The GT has some of the most stunningly exotic bodywork in existence. Highlights include a mid-engine twin-turbo 3.5-liter V-6 making more than 600 hp, carbon-fiber construction and body panels, active aerodynamics, and a seven-speed dual-clutch automatic; a manual won’t be offered. Mark your calendars: A second chance to apply to own a GT comes in early 2018.',
      price: '$400,000',
      image: './image/ford_gt.jpg'
    }, {
      item: 'Porche 911 turbo',
      description: 'For decades, the 911 Turbo has been the stuff of legends, and it remains so today. With a monstrous 540 hp on tap—make that 580 hp in the case of the Turbo S—and a seven-speed dual-clutch automatic doing the shifting, Porsche’s all-wheel-drive supercar can hit 60 mph in less than three seconds. Take your pick of coupe or cabriolet; the exterior styling is timelessly gorgeous, and its luxurious interior makes this precious road rocket a genuine pleasure to drive on any road, at any time.',
      price: '$159,200',
      image: './image/porche_turbo.jpg'
    }, {
      item: 'lamborghini Aventador',
      description: 'Brutally powerful and obscenely flamboyant, the Aventador is unburdened by reality. Crazy expensive and crazy fast, it’s capable of amazing performance without feeling like it’s going to snap-spin into a ditch, which is refreshing in a supercar. Available as a coupe (or roadster), it has a 6.5-liter 691-hp V-12, a 7-speed automated manual transmission and all-wheel drive. For the ultimate, the Superveloce has 740 hp and a claimed top speed of 217 mph. In our testing, it did 0-60 in 2.7 seconds.',
      price: '$402,995',
      image: './image/lambo_aventador.jpg'
    }, {
      item: 'Mercedes-Benz E63 AMG',
      description: 'Absurd power and blistering acceleration are not the E63’s only party tricks; thanks to computer magic and an excellent suspension, it’s also quite agile. But oh, that mighty 577-hp 5.5-liter twin-turbo V-8 is a sweetheart of an engine. A seven-speed automatic and all-wheel drive are standard, as are 14-way power-operated and heated/cooled seats. If the sedan isn’t enough, check out the E63 wagon; it’ll haul your groceries in record time. Note: These models replace the Mercedes-Benz versions.',
      price: '$102,625',
      image: './image/benz_e63.jpg'
    }]
  };
  beforeEach(module('app.dropDownActions'));
  beforeEach(inject(function (_dropDownFactory_, _$httpBackend_, _$rootScope_) {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    dropDownFactory = _dropDownFactory_;
    $httpBackend.when('GET', '/inventory').respond(options);
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
  it('should call http when to get inventory', function () {
    $httpBackend.expectGET('/inventory');
    dropDownFactory.getData();
    $httpBackend.flush();
  });
});
