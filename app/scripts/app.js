'use strict';

/**
 * @ngdoc overview
 * @name restoneuchApp
 * @description
 * # restoneuchApp
 *
 * Main module of the application.
 */
angular
  .module('restoneuchApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'jkuri.gallery'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/restaurant/:unresto', {
        templateUrl: 'views/restaurant.html',
        controller: 'RestaurantCtrl',
        controllerAs: 'restaurant'
      })
      .when('/partenaires', {
        templateUrl: 'views/partenaires.html',
        controller: 'PartenairesCtrl',
        controllerAs: 'partenaires'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });




    
