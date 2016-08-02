'use strict';

/**
 * @ngdoc function
 * @name restoneuchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the restoneuchApp
 */
angular.module('restoneuchApp')
  .controller('MainCtrl', function ($scope, data) {

    var main = this;
     
    main.data = data;

    $(document).ready(function(){
      // Controler qu'on n'est pas en haut de la page
      $(window).scroll(function(){
          //Si l'on est au-dessus de 100px...
          if ($(this).scrollTop() > 100) {
              // ...l'image apparait
              $('.scrollToTop').fadeIn();
            // sinon...
          } else {
              // ...elle disparait
              $('.scrollToTop').fadeOut();
          }
      });	
      // Au clic sur l'élément de type "scrollToTop"...
      $('.scrollToTop').click(function(){
          // ...on se replace en haut de la page
          $('html, body').animate({scrollTop : 0},800);
          return false;
	 });	
    });
 
  });
