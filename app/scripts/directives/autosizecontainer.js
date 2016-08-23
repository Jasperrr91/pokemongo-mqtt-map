'use strict';

/**
 * @ngdoc directive
 * @name mqttMapApp.directive:autoSizeContainer
 * @description
 * # autoSizeContainer
 */
angular.module('mqttMapApp')
  .directive('autoSizeContainer',['$window', function ($window) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var resize = function(){
          var navbarHeight = $('.navbar-collapse').height();
          element.height(($window.innerHeight ));
          element.width(($window.innerWidth));
          if(scope.hasOwnProperty('maps')){
            angular.forEach(scope.maps, function(map){
              google.maps.event.trigger(map,'resize');
            });
          }

        };
        resize();


        angular.element($window).bind('resize', function(){
          resize();
          scope.$digest();
        });
      }
    };
  }]);