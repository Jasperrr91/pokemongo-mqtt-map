'use strict';

/**
 * @ngdoc function
 * @name mqttMapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mqttMapApp
 */
angular.module('mqttMapApp')
  .controller('MainCtrl',['$scope', 'SocketService', 'NgMap', 'ToolService', function ($scope, SocketService, NgMap, ToolService) {
    NgMap.getMap().then(function(map) {
      $scope.maps = map;
    });

    $scope.map_pokemons = {};


    SocketService.on('mqtt', function(event){
      var message = event.message;
      var topic = event.topic;

      var pokemon_id = topic.split('/').pop();
      var s = message.split(',');
      var lat = s[0];
      var lng = s[1];
      var encounter_id = s[2];

      $scope.map_pokemons[encounter_id] = {
        id: ToolService.toThreeDigits(pokemon_id),
        name: ToolService.pokemonById(pokemon_id),
        encounter_id: encounter_id,
        position: [lat, lng]
      };
      console.log($scope.map_pokemons)
    })
  }]);
