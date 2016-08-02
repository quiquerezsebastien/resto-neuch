'use strict';

/**
 * @ngdoc function
 * @name restoneuchApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the restoneuchApp
 */
angular.module('restoneuchApp')
  .controller('ContactCtrl', function (data) {
    
    var contact = this;
    contact.data = data;

  });
