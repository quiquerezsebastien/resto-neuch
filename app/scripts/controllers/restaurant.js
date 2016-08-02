'use strict';

/**
 * @ngdoc function
 * @name restoneuchApp.controller:RestaurantCtrl
 * @description
 * # RestaurantCtrl
 * Controller of the restoneuchApp
 */
angular.module('restoneuchApp')
  .controller('RestaurantCtrl', function ($routeParams, data) {

    var restaurant = this;
    

    restaurant.param = $routeParams.unresto;

    restaurant.data = data;

    /*
    appel de la fonction afin de récupérer les information concernant un restaurant
    en lui passant l'id en paramètre.
    paramètre qui vient de l'URL*/
    
    restaurant.data.getResto(restaurant.param);

    $('[data-toggle="popover"]').popover({trigger: 'hover','placement': 'top'});

  });
