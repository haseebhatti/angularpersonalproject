(function () {
  angular.module('app.customDirective', [])
    .directive('myDirective', function () {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directive/customDirec.html.tpl',
        scope: {
          title: '@'
        }
      };
    });
})();
